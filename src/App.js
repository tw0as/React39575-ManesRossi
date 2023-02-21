import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        imgurl="/assets/img/oldschool.png"
        greeting="Welcome to Old School MTG!"
      />
      <Wrapper>

      </Wrapper>
    </>
  );
}

export default App;