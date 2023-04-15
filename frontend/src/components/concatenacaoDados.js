var arrayDeDados = [];
var retornoProbabilidades;

//importa um objeto
export default function somarArray(arrayImportado) {
  //transforma o objeto em array
  const objParaString = JSON.stringify(arrayImportado);
  //concatena o antigo array com os novos dados
  arrayDeDados = arrayDeDados.concat(objParaString);
  // printarArray(arrayDeDados);
  return arrayDeDados;
}

export function limparArray() {
  return (arrayDeDados = []);
}

export function printarArray() {
  console.log(arrayDeDados);
}

export function setarRetornoProbabilidades(data){
    retornoProbabilidades=data;
}

export function getRetornoProbabilidades(){
  return retornoProbabilidades;
}

export function getArrayDados(){
  return arrayDeDados;
}