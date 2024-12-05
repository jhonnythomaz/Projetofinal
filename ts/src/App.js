import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Usando alias Router
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Menu from './Components/menu';
import Footer from './Components/footer';

function App() {
  return (
    <Router>  {/* Usando Router como alias para BrowserRouter */}
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
