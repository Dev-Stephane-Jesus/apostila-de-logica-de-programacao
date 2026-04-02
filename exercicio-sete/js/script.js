function calcularIdade(){
  let anos = Number(document.getElementById("anos").value);
  let meses = Number(document.getElementById("meses").value);
  let dias = Number(document.getElementById("dias").value);

  let totalDias = (anos * 365) + (meses * 30) + dias;

  document.getElementById("resultado").innerText = "Idade em dias: " + totalDias;
}