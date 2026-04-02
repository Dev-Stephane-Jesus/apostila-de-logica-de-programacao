let botao = document.getElementById("desespero");

botao.onclick = function() {
  let tempF = Number(document.getElementById("tempF").value);

  let cel = (tempF - 32) * 5 / 9;

  document.getElementById("resultado").innerText =
    "Resultado: " + cel;
};