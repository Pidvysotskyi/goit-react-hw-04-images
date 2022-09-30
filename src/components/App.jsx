import { InfinitySpin as Loader } from 'react-loader-spinner';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <Container>
      <Searchbar />
      <Loader width="200" color="#4fa94d" />
    </Container>
  );
};
