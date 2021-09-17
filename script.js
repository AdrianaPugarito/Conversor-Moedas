function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorRealNumerico = parseFloat(valor);
  var valorDolar = valorRealNumerico / 5.24;
  console.log(valorDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "US$ " + valorDolar.toFixed(2);

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorRealNumerico = parseFloat(valor);
  var valorEuro = valorRealNumerico / 6.19;
  console.log(valorEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "€ " + valorEuro.toFixed(2);

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorRealNumerico = parseFloat(valor);
  var valorLibra = valorRealNumerico / 7.23;
  console.log(valorLibra);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "£ " + valorLibra.toFixed(2);

  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorRealNumerico = parseFloat(valor);
  var valorBitcoin = valorRealNumerico / 247195.37;
  console.log(valorBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "₿ " + valorBitcoin.toFixed(10);

  elementoValorConvertido.innerHTML = valorConvertido;
}