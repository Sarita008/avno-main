import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Productpage from '../pages/PDP/productPage';
import Home from '../pages/Home/Home';
import Cartpage from '../pages/CartPage/Cartpage';
import Checkout from '../pages/Checkout/Checkout';
import Payment from '../pages/Payment/Payment';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/product/:productId" element={<Productpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  )
}

export default AllRoutes