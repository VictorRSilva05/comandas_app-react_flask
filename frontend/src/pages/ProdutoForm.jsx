import { useState } from 'react';

export default function Produto() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    tipo: '',
    valor: '',
    foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, tipo, valor, foto } = form;
    if (!nome || !tipo || !valor || !foto) {
      alert('Preencha todos os campos!');
      return;
    }
    setProdutos([...produtos, form]);
    setForm({ nome: '', tipo: '', valor: '', foto: '' });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl text-synthPink mb-6">Cadastro de Produtos</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={form.nome}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo (ex: Salgado, Bebida...)"
          value={form.tipo}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor (R$)"
          value={form.valor}
          onChange={handleChange}
          step="0.01"
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />
        <input
          type="text"
          name="foto"
          placeholder="URL da Foto"
          value={form.foto}
          onChange={handleChange}
          className="p-2 rounded bg-black text-neon border border-synthPink"
        />

        <button
          type="submit"
          className="bg-synthPink text-black px-4 py-2 rounded hover:bg-synthBlue"
        >
          Cadastrar Produto
        </button>
      </form>

      {produtos.length > 0 && (
        <>
          <h2 className="text-2xl text-synthPink mt-8 mb-4">Produtos Cadastrados</h2>
          <table className="w-full text-neon border-collapse">
            <thead>
              <tr>
                <th className="border border-synthPink p-2">Nome</th>
                <th className="border border-synthPink p-2">Tipo</th>
                <th className="border border-synthPink p-2">Valor</th>
                <th className="border border-synthPink p-2">Foto</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto, index) => (
                <tr key={index}>
                  <td className="border border-synthPink p-2">{produto.nome}</td>
                  <td className="border border-synthPink p-2">{produto.tipo}</td>
                  <td className="border border-synthPink p-2">R$ {parseFloat(produto.valor).toFixed(2)}</td>
                  <td className="border border-synthPink p-2">
                    <img src={produto.foto} alt="Produto" className="h-16 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
