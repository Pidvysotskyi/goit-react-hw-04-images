import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

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
