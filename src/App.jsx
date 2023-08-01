import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import PNF from './pages/PageNotFound/PNF';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path="*" element={<PNF />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
