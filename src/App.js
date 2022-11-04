import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
