import { Searchbar } from './Searchbar/Searchbar';


export const App = () => {
  
  // state = {
  //   word: '',
  // };
  
  // handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   const input = this.state.word;
  // }

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
      <Searchbar forSubmit={"dodać handler"} />
    </div>
  );
};
