let produto = { nome: "Sapato", preco: 150 };

formulaImpostoA = function (preco) {return preco*0.1}
formulaImpostoB = function (preco) {return preco*0.2}

calculaPrecoFinal = function (produto, formulaImposto) {
  return produto["preco"] + formulaImposto(produto["preco"])
}

calculaPrecoFinal(produto.preco, formulaImpostoA);
calculaPrecoFinal(produto.preco, formulaImpostoB);