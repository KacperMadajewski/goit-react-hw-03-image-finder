import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchQuery } from './Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    loading: false,
    images: [],
    selectedImage: null,
  };

  handleSearch = query => {
    this.setState({ query, loading: true, images: [] });

    searchQuery(query)
      .then(response => {
        this.setState({ images: response.data.hits });
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  openModal = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  // handleChange = ev => {
  //   this.setState({ query: ev.target.value });
  // };

  // handleSubmit = ev => {
  //   ev.preventDefault();
  //   const { query } = this.state;
  //   api.fetchImagesFromApi(query).then(images => {
  //     this.setState({ images });
  //   });
  // };

  render() {
    const { loading, images, selectedImage } = this.state;
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
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery items={images} onItemClick={this.openModal} />
        {loading && <Loader />}

        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={this.closeModal}
            imageUrl={selectedImage}
          />
        )}

        {/* POPRZEDNIA WERSJA WYŚWIETLANIA */}

        {/* {loading ? (
          <Loader />
        ) : (
          <ImageGallery items={images} onItemClick={this.openModal} />
        )}
        <ImageGallery items={images} onItemClick={this.openModal} />
        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={this.closeModal}
            imageUrl={selectedImage}
          />
        )} */}
      </div>
    );
  }
}
