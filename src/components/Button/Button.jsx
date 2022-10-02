import { LoadButton } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick}>
      {children}
    </LoadButton>
  );
};
