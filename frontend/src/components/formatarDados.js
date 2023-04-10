export default function formatarDados(dados) {
  const [
    cpf,
    nome,
    idade,
    sintomas1,
    sintomas2,
    sintomas3,
    sintomas4,
    sintomas5,
  ] = dados; // Desestrutura o array para obter cada elemento

  // Remove as aspas duplas e converte os valores de idade e sintomas para números
  const cpfFormatado = cpf.replace(/"/g, "");
  const nomeFormatado = nome.replace(/"/g, "");
  const idadeFormatada = parseInt(idade.replace(/"/g, ""), 10);

  // Concatena e converte os valores dos sintomas para 0 e 1
  const sintomas = [sintomas1, sintomas2, sintomas3, sintomas4, sintomas5];
  const sintomasFormatados = sintomas
    .map((sintoma) => Object.values(JSON.parse(sintoma)))
    .flat()
    .map((valor) => (valor ? 1 : 0));

  // Retorna o objeto JSON formatado
  return {
    cpf: cpfFormatado,
    nome: nomeFormatado,
    idade: idadeFormatada,
    sintomas: sintomasFormatados.join("|") + "|",
  };
}
