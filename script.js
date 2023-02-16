// //Pratica Guiada
// const estudante = {
//   nome: 'Lara',
//   sobrenome: 'Tolio',
//   numeroMatricula: 2050,
//   notasSemestre: [10, 8, 6.5, 7.5]
// }
// //Adicionando chave
// estudante.modulo = 3

// // // imprima no console a propriedade nome
// // const nomeDeEstudante = estudante.nome
// // console.log(estudante.nome )
// // // imprima no console a segunda nota da pessoa no semestre
// // const segundaNotadoSemestre = estudante.notasSemestre[1]
// // console.log(segundaNotadoSemestre)
// // // imprima o módulo em que a pessoa está
// // const imprimaModulo = estudante.modulo
// // console.log(imprimaModulo)

// // //use o spread
// // const copiaEstudante = {
// // ... estudante
// // }
// // // alterar o nome para Astrodev;
// // copiaEstudante.nome = "Astrodev",
// // // adicionar a nota 9 às notas do semestre;
// // copiaEstudante.notasSemestre.push(9),
// // // alterar o módulo para o próximo módulo;
// // copiaEstudante.modulo = 4,
// // // imprimir o objeto com as atualizações.
// // console.log(copiaEstudante)

// //Copiando o objeto incial e já alterando as propriedades

// const copiaEstudante = {
//   ...estudante,
//   nome: 'Astrodev',
//   modulo: 4,
//   notasSemestre: [...estudante.notasSemestre, 9]
// }
// console.log(copiaEstudante)
// //criando array de estudante da Labenu
// const estudantesLabenu = []
// estudantesLabenu.push(estudante, copiaEstudante)
// console.log(estudantesLabenu)

const carrinho = {
  nomePessoa: 'Maria',
  formaPagamento: 'pix',
  endereco: 'Lagoa, 634'
}

carrinho.compras = [
  {
    nomeDoProduto: 'Blusa',
    valorDoProduto: 30,
    quantProduto: 2
  },
  {
    nomeDoProduto: 'Calca',
    valorDoProduto: 60,
    quantProduto: 1
  },
  {
    nomeDoProduto: 'Casaco',
    valorDoProduto: 40,
    quantProduto: 3
  },
  {
    nomeDoProduto: 'Meias',
    valorDoProduto: 20,
    quantProduto: 4
  }
]
//Para saber a quantidade de produtos do carrinho:
const quantidadeDeProdutosCarrinho = carrinho.compras.length
console.log(quantidadeDeProdutosCarrinho)

const carrinhoPresente ={
  ...carrinho,
pessoaPresenteada: "Ana",
formaPagamento : "cartao"

}

// console.log(carrinho)
// console.log(carrinhoPresente)
