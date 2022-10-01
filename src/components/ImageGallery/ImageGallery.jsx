import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map((item, index) => {
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
};
