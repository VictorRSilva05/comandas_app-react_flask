import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === 'abc' && pass === 'bolinhas') {
      setAuth(true);
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6 text-synthBlue">Login Retrô</h1>
      <input
        className="mb-2 p-2 rounded bg-black text-neon border border-synthPink"
        placeholder="Usuário"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <input
        className="mb-4 p-2 rounded bg-black text-neon border border-synthPink"
        type="password"
        placeholder="Senha"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-synthPink text-black px-4 py-2 rounded hover:bg-synthBlue"
      >
        Entrar
      </button>
    </div>
  );
}
