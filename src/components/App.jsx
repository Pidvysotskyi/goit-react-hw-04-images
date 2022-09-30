import { InfinitySpin as Loader } from 'react-loader-spinner';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Loader width="200" color="#4fa94d" />
    </Container>
  );
};
