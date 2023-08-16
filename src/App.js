import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';
import { CartContextProvider } from './Context/cartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element= {<Cart/>} />
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
