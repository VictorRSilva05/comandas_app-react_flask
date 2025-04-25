import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/LoginForm';
import Cliente from './pages/ClienteForm';
import Produto from './pages/ProdutoForm';
import Funcionario from './pages/FuncionarioForm';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';

export default function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Menu isAuth={isAuth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/funcionario" element={<Funcionario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
