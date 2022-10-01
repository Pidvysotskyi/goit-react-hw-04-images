import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';

const API_KEY = '29264907-2ab68c5d7b62ca0acfac904a2';

function getImages(query, pageNumber) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
}

export class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    const currentQuery = this.props.query;
    const currentPage = this.props.pageNumber;
    getImages(currentQuery, currentPage).then(response => {
      const data = response.map(({ id, webformatURL, largeImageURL, tags }) => {
        return { id, webformatURL, largeImageURL, tags };
      });
      this.setState({ images: data });
    });
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.images.map((item, index) => {
          return (
            <ImageGalleryItem
              key={item.id}
              imageUrl={item.webformatURL}
              alt={item.tags}
            />
          );
        })}
      </ul>
    );
  }
}
