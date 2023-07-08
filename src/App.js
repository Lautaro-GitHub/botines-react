import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListConteiner/ItemListConteiner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer prop_greeting={"Bienvenidos a mi pagina de botines"}/>
    </div>
  );
}

export default App;
