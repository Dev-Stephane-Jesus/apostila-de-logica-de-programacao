function calcular() {
  let total = Number(document.getElementById("total").value);
  let brancos = Number(document.getElementById("brancos").value);
  let nulos = Number(document.getElementById("nulos").value);
  let validos = Number(document.getElementById("validos").value);

  let porcentoBrancos = (brancos / total) * 100;
  let porcentoNulos = (nulos / total) * 100;
  let porcentoValidos = (validos / total) * 100;

  document.getElementById("resultado").innerText =
    "Brancos: " + porcentoBrancos + "%";

  document.getElementById("resultado2").innerText =
    "Nulos: " + porcentoNulos + "%";

  document.getElementById("resultado3").innerText =
    "Válidos: " + porcentoValidos + "%";
}




// vei, será q tá certo esse negocio diachp