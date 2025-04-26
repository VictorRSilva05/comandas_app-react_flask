import { useState } from 'react';

export default function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    matricula: '',
    telefone: '',
    senha: '',
    grupo: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    let novoValor = value;

    if (name === 'cpf') novoValor = formatarCPF(value);
    if (name === 'telefone') novoValor = formatarTelefone(value);

    setForm({ ...form, [name]: novoValor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, cpf, matricula, senha, grupo } = form;
    if (!nome || !cpf || !matricula || !senha || !grupo) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    setFuncionarios([...funcionarios, form]);
    setForm({
      nome: '',
      cpf: '',
      matricula: '',
      telefone: '',
      senha: '',
      grupo: '',
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl text-synthPink mb-6">Cadastro de Funcionários</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          maxLength={14}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="text"
          name="matricula"
          placeholder="Matrícula"
          value={form.matricula}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          maxLength={15}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <select
          name="grupo"
          value={form.grupo}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        >
          <option value="">Selecione o Grupo</option>
          <option value="admin">Admin</option>
          <option value="gerente">Gerente</option>
          <option value="funcionario">Funcionário</option>
        </select>

        <button
          type="submit"
          className="bg-synthPink text-black px-4 py-2 rounded hover:bg-synthBlue"
        >
          Cadastrar Funcionário
        </button>
      </form>

      {funcionarios.length > 0 && (
        <>
          <h2 className="text-2xl text-synthPink mt-8 mb-4">Funcionários Cadastrados</h2>
          <table className="w-full text-neon border-collapse">
            <thead>
              <tr>
                <th className="border border-synthPink p-2">Nome</th>
                <th className="border border-synthPink p-2">CPF</th>
                <th className="border border-synthPink p-2">Telefone</th>
                <th className="border border-synthPink p-2">Grupo</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((func, index) => (
                <tr key={index}>
                  <td className="border border-synthPink p-2">{func.nome}</td>
                  <td className="border border-synthPink p-2">{func.cpf}</td>
                  <td className="border border-synthPink p-2">{func.telefone}</td>
                  <td className="border border-synthPink p-2">{func.grupo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}