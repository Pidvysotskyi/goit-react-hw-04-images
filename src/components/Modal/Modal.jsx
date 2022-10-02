import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ imageUrl, alt, onCloseModal }) => {
  return (
    <Overlay
      onClick={event => {
        if (event.target !== event.currentTarget) {
          return;
        }
        onCloseModal();
      }}
    >
      <ModalWindow>
        <img src={imageUrl} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
};
