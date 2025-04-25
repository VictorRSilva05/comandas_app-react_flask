import { Link } from 'react-router-dom';

export default function Menu({ isAuth, setAuth }) {
  if (!isAuth) return null;

  return (
    <nav className="bg-black p-4 flex gap-4 border-b border-synthPink">
      <Link to="/home">Home</Link>
      <Link to="/funcionario">Funcionário</Link>
      <Link to="/cliente">Cliente</Link>
      <Link to="/produto">Produto</Link>
      <button onClick={() => setAuth(false)}>Sair</button>
    </nav>
  );
}
