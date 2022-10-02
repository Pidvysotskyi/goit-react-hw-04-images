import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery
      onClick={event => {
        if (event.target.nodeName !== 'IMG') {
          return;
        }
        onClick(event.target.id);
      }}
    >
      {images.map((item, index) => {
        return (
          <ImageGalleryItem
            key={item.id}
            imageUrl={item.webformatURL}
            alt={item.tags}
            id={item.id}
          />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
