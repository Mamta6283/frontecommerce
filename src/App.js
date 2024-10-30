import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/footer/Footer';
import banner_mens from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'
function App() {
  return (
   <>
    {/* <Shop></Shop> */}
      <BrowserRouter> 
     <Navbar></Navbar>
     <Routes>
    
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/mens' element={<ShopCategory banner={banner_mens} categoryall="men"></ShopCategory>}></Route>
      <Route path='/womens' element={<ShopCategory banner={banner_women} categoryall="women"></ShopCategory>}></Route>
      <Route path='/kids' element={<ShopCategory banner={banner_kids} categoryall="kid"></ShopCategory>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/product/:productId' element={<Product></Product>}></Route>

      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
     </Routes>
     <Footer></Footer>
     </BrowserRouter> 
   </>
  );
}

export default App;
