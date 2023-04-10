var arrayDeDados = [];

//importa um objeto
export default function somarArray(arrayImportado) {
  //transforma o objeto em array
  const objParaString = JSON.stringify(arrayImportado);
  //concatena o antigo array com os novos dados
  arrayDeDados = arrayDeDados.concat(objParaString);
  // //printa o array
  // printarArray(arrayDeDados);
  return  formatarDados(arrayDeDados);
}

export function formatarDados(dados) {
  const [cpf, nome, idade, sintomas1, sintomas2, sintomas3, sintomas4, sintomas5] = dados; // Desestrutura o array para obter cada elemento


  // Remove as aspas duplas e converte os valores de idade e sintomas para números
  const cpfFormatado = cpf.replace(/"/g, '');
  const nomeFormatado = nome.replace(/"/g, '');
  const idadeFormatada = parseInt(idade.replace(/"/g, ''), 10);

  let sintomasFormatados = Object.values(JSON.parse(sintomas1));
  const sintomas = [sintomas2, sintomas3, sintomas4, sintomas5];
  sintomas.forEach(sintoma => {
    sintomasFormatados.concat(Object.values(JSON.parse(sintoma))).map((valor) => Number(valor));
  });

  // Retorna o objeto JSON formatado
  return {
    cpf: cpfFormatado,
    nome: nomeFormatado,
    idade: idadeFormatada,
    sintomas: sintomasFormatados.join('|') + '|',
  };
}

export function limparArray() {
  return (arrayDeDados = []);
}

export function printarArray() {
  console.log(arrayDeDados);
}
