import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/user/home/Home'
import Order from "../src/user/order/Order"
import Menu from "../src/user/menu/Menu"
import Contact from './user/contact/Contact'
import About from './user/about/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
