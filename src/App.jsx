import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home"
import Products from "./pages/Main_Products"
import Contact from "./pages/Contact"
import Header from './header/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import SingleProduct from './components/SingleProduct'
import Main_Products from "./pages/Main_Products"
import Cart from "./pages/Cart"
import GoToTop from './components/GoToTop'
import ScrollToTop from './components/ScrollToTop'
import { motion , AnimatePresence } from 'framer-motion'



const App = () => {
  const location=useLocation()
  

  return (
    <>   
        <GoToTop />
        <ScrollToTop />
         <Header />
         <AnimatePresence>
        <Routes location={location} key={location.key} >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/Main_Products" element={<Main_Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='*' element={<Error/>}/>

        </Routes>
        </AnimatePresence>
        <Footer />
    </>
  )
}

export default App