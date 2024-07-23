import Home from './pages/Home';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Cart from './pages/Cart';
import RMINavbar2 from './components/RMINavbar2';

function App() {
  return (
    <>
    <RMINavbar2/>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/catalog'  element={<Catalog/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/faqs'  element={<FAQs/>}/>
        <Route path='/cart'  element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;