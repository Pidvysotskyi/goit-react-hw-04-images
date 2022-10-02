import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
