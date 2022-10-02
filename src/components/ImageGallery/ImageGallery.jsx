import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul
      className="gallery"
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
    </ul>
  );
};
