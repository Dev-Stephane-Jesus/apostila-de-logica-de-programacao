
function calcularSalario() {
  let salario = Number(document.getElementById("salario").value);
  let reajuste = Number(document.getElementById("reajuste").value);

  let novoSalario = salario + (salario * reajuste / 100);

  document.getElementById("resultado").innerText =
    "Novo salário: " + novoSalario;

}
// oooooh raivaqaaaaaaaaaaaa

document.getElementById("botao").onclick = function(){
  calcularSalario();
};