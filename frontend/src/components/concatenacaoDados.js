var arrayDeDados = [];

//importa um objeto
export default function somarArray(arrayImportado) {
  //transforma o objeto em array
  const objParaString = JSON.stringify(arrayImportado);
  //concatena o antigo array com os novos dados
  arrayDeDados = arrayDeDados.concat(objParaString);
  // printarArray(arrayDeDados);
  return arrayDeDados;
}
