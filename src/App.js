import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailConteiner/ItemDetailConteiner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
