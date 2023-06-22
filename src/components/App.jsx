import { Searchbar } from './Searchbar/Searchbar';
import api from './Services/api';

export const App = () => {
  state = {
    word: '',
    query: '',
    pageNum: '',
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.getImages(this.state.query);
  };

  getImages = async query => {
    try {
      const images = await api.fetchImagesFromApi(query);
      this.setState({ images });
    } catch (err) {
      this.setState({ error: err });
    }
  };

  componentDidMount() {
        this.getImages('HTML')
    }

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
      <Searchbar forSubmit={this.handleSubmit} />
    </div>
  );
};
