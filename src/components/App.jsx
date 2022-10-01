import { Component } from 'react';
import { InfinitySpin as Loader } from 'react-loader-spinner';
import { Container } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'utils/getImages';

export class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    status: 'idle',
    images: [],
    isModal: false,
  };
  componentDidUpdate(_, prevState) {
    const currentQuery = this.state.query;
    const currentPage = this.state.pageNumber;
    if (prevState.query !== currentQuery) {
      this.setState({ pageNumber: 1, status: 'pending' });
      getImages(currentQuery, currentPage).then(response => {
        this.setState({ images: response, status: 'done' });
      });
    } else if (prevState.pageNumber !== currentPage) {
      this.setState({ status: 'pending' });
      getImages(currentQuery, currentPage).then(response => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...response],
            status: 'done',
          };
        });
      });
    }
  }

  onSearchHandle = value => {
    this.setState({ query: value });
  };

  onLoadMoreHandle = () => {
    this.setState(prevState => {
      return { pageNumber: prevState.pageNumber + 1 };
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSearch={this.onSearchHandle} />
        {this.state.status === 'done' && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.status === 'done' && (
          <Button onClick={this.onLoadMoreHandle}>Load more</Button>
        )}
        {this.state.status === 'pending' && (
          <Loader width="200" color="#4fa94d" />
        )}
      </Container>
    );
  }
}
