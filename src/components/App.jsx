import { Component } from 'react';
import { InfinitySpin as Loader } from 'react-loader-spinner';
import { Container } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    pageNumber: 1,
    status: 'idle',
  };
  onSearchHandle = value => {
    this.setState({ query: value });
  };

  render() {
    return (
      <Container>
        <Searchbar onSearch={this.onSearchHandle} />
        {this.state.query !== '' && (
          <ImageGallery
            query={this.state.query}
            pageNumber={this.state.pageNumber}
          />
        )}
        <Loader width="200" color="#4fa94d" />
      </Container>
    );
  }
}
