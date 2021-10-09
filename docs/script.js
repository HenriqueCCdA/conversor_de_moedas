var numeroConvMoeda = 5;
var tipoConv = 0;

function converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);
  var valorConv = valorNumerico * numeroConvMoeda;
  var elementoValorConvertido = document.getElementById("valorConvertido");

  if(tipoConv == 0) 
    var valorConvertido = "O resultado em real é R$ " + valorConv;
  else if(tipoConv == 1)
    var valorConvertido = "O resultado em dolar é US$ " + valorConv;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function tipo_convercao(){
  var pageSubtitle = document.getElementById("page-subtitle");
  var dolarReal = document.getElementsByName("dolar-real");
  var insiraValor = document.getElementById("moeda");

  var dolarParaReal = 5;
  var realParaDolar = 1.0/dolarParaReal;

  if(dolarReal[0].checked){
    tipoConv = 0
    numeroConvMoeda = dolarParaReal
    insiraValor.textContent="Insira o valor em dolar"
    pageSubtitle.textContent="Descubra os valores em real R$"
  }
  else if(dolarReal[1].checked){
    tipoConv = 1
    numeroConvMoeda = realParaDolar
    insiraValor.textContent="Insira o valor em real"
    pageSubtitle.textContent="Descubra os valores em dolar US$"
  }

}