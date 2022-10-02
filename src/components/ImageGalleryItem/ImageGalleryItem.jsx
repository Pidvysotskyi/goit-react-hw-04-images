import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageUrl, alt, id }) => {
  return (
    <Item>
      <Img src={imageUrl} alt={alt} id={id} />
    </Item>
  );
};
