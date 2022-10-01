export const ImageGalleryItem = ({ imageUrl, alt }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt={alt} />
    </li>
  );
};
