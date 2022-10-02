export const ImageGalleryItem = ({ imageUrl, alt, id }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt={alt} id={id} />
    </li>
  );
};
