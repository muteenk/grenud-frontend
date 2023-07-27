import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import PNF from './pages/PageNotFound/PNF';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<PNF />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
