function calcularCarro() {
  let custo = Number(document.getElementById("custo").value);

  let distribuidor = custo * 0.28;
  let impostos = custo * 0.45;

  let custoFinal = custo + distribuidor + impostos;

  document.getElementById("resultado").innerText =
    "Custo final: " + custoFinal;
}

document.getElementById("botao").onclick = function() {
  calcularCarro();
};