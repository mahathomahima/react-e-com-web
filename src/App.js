/*import React from 'react';
import UserProfile from './Components/UserProfile';
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]


function App() {
 return (
  <div className='item-container'>
    {
      userDetailsList.map((eachItem, i) => {
        return(
          <UserProfile key={i} id={eachItem.uniqueNo} image={eachItem.imageUrl} name={eachItem.name} role={eachItem.role} />
        )
      })
    }
  </div>
 );
}

export default App;
*/

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import './App.css';
import ShopCategory from './Pages/ShopCategory';
import Prodcut from './Pages/Prodcut';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='product' element={<Prodcut/>}>
           <Route path=':productId' element={<Prodcut/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App
