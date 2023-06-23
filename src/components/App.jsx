import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import api from './Services/api';

export class App extends Component {
  state = {
    query: '',
    images: []
  };

  handleChange = (ev) => {
    this.setState({ query: ev.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { query } = this.state;
    api.fetchImagesFromApi(query).then(images => {
      this.setState({ images });
    });
  };

  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar forSubmit={this.handleSubmit} forChange={this.handleChange} />
      </div>
    );
  };
}
