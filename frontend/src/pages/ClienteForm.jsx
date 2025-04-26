import { useState } from 'react';

export default function Cliente() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastrar = () => {
    if (!nome.trim() || cpf.length !== 14 || telefone.length !== 15) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const novoCliente = { nome, cpf, telefone };
    setClientes([...clientes, novoCliente]);
    
    setNome('');
    setCpf('');
    setTelefone('');
  };

  const formatarCPF = (valor) => {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return valor;
  };

  const formatarTelefone = (valor) => {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    return valor;
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6 text-synthPink">Cadastro de Clientes</h1>

      <div className="flex flex-col gap-4 mb-8 max-w-md">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />

        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(formatarCPF(e.target.value))}
          maxLength={14}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
          maxLength={15}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />

        <button
          onClick={handleCadastrar}
          className="bg-synthPink text-black px-4 py-2 rounded hover:bg-synthBlue"
        >
          Cadastrar Cliente
        </button>
      </div>

      <h2 className="text-2xl mb-4 text-synthPink">Lista de Clientes</h2>
      <table className="w-full text-neon border-collapse">
        <thead>
          <tr>
            <th className="border border-synthPink p-2">Nome</th>
            <th className="border border-synthPink p-2">CPF</th>
            <th className="border border-synthPink p-2">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td className="border border-synthPink p-2">{cliente.nome}</td>
              <td className="border border-synthPink p-2">{cliente.cpf}</td>
              <td className="border border-synthPink p-2">{cliente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}