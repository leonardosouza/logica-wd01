function salvar() {
  var produto = document.getElementById("product").value;
  var preco = document.getElementById("price").value;
  var quantidade = document.getElementById("quantity").value;
  var parcelas = document.getElementById("parcel").value;
  mostra(produto, preco, quantidade, parcelas);
}

function mostra(prod, prec, quant, vezes) {
  document.getElementById("produto").innerText = prod;
  document.getElementById("preco").innerText = prec;
  document.getElementById("quantidade").innerText = quant;
  document.getElementById("total").innerText = total(quant, prec);
  document.getElementById("desconto").innerText = desconto( total(quant, prec) );
  document.getElementById("parcelas").innerText = vezes;
  document.getElementById("valor-parcela").innerText = parcelas( total(quant, prec), vezes );

}

function total(quantidade, preco) {
  var resultado = quantidade * preco;
  return resultado;
}

function desconto(baseDeCalculo) {
  var resultado = baseDeCalculo * 0.8;
  return resultado;
}

function parcelas(valorTotal, vezes) {
  return valorTotal / vezes;
}
