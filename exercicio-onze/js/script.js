function calcular() {
  let carros = Number(document.getElementById("carros").value);
  let vendas = Number(document.getElementById("vendas").value);
  let fixo = Number(document.getElementById("fixo").value);
  let porCarro = Number(document.getElementById("porCarro").value);

  let comissao = vendas * 0.05;
  let totalCarros = carros * porCarro;

  let salarioFinal = fixo + comissao + totalCarros;

  document.getElementById("resultado").innerText =
    "Salário final: " + salarioFinal;
}


document.getElementById("bitao").onclick = function() {
  calcular();
};








