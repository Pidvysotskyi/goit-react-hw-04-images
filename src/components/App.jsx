import { Component } from 'react';
import { Container } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'utils/getImages';
import { Modal } from './Modal/Modal';
import { GlobalStyle } from './GlobalStyles';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    status: 'idle',
    images: [],
    isModal: false,
    currentImage: {},
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, pageNumber, isModal } = this.state;
    const currentQuery = query;
    const currentPage = pageNumber;
    if (prevState.query !== currentQuery) {
      this.setState({ pageNumber: 1, status: 'pending' });
      getImages(currentQuery, currentPage)
        .then(response => {
          if (response.length === 0) {
            return Promise.reject(new Error(`Cannot find ${currentQuery}`));
          }
          this.setState({ images: response });
        })
        .then(() => {
          this.setState({ status: 'done', error: '' });
        })
        .catch(error => {
          this.setState({ status: 'error', error: error.message });
        });
      return;
    }
    if (prevState.pageNumber !== currentPage) {
      this.setState({ status: 'pending' });
      getImages(currentQuery, currentPage)
        .then(response => {
          if (response.length === 0) {
            return Promise.reject(new Error(`Cannot find ${currentQuery}`));
          }
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...response],
            };
          });
        })
        .then(() => {
          this.setState({ status: 'done' });
        })
        .catch(error => {
          this.setState({ status: 'error', error: error.message });
        });
      return;
    }
    if (isModal) {
      document.addEventListener('keydown', this.onEscHandle);
      return;
    }
    if (!isModal) {
      document.removeEventListener('keydown', this.onEscHandle);
      return;
    }
  }

  onEscHandle = event => {
    if (event.code === 'Escape') {
      this.onCloseModal();
    }
  };

  onSearchHandle = value => {
    this.setState({ query: value });
  };

  onLoadMoreHandle = () => {
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber + 1 };
    });
  };

  onGalleryClickHandle = imageId => {
    const currentImage = this.state.images.find(item => {
      return item.id === Number(imageId);
    });
    this.setState({ currentImage: currentImage, isModal: true });
  };

  onCloseModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { status, images, isModal, currentImage, error } = this.state;
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.onSearchHandle} />
          {status === 'done' && (
            <>
              <ImageGallery
                images={images}
                onClick={this.onGalleryClickHandle}
              />
              <Button onClick={this.onLoadMoreHandle}>Load more</Button>
            </>
          )}
          {status === 'pending' && <Loader />}
          {isModal && (
            <Modal
              imageUrl={currentImage.largeImageURL}
              alt={currentImage.tags}
              onCloseModal={this.onCloseModal}
            />
          )}
          {status === 'error' && <p>{error}</p>}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
