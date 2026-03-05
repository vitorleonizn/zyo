function publicarVaga(event){

event.preventDefault();

let empresa = document.getElementById("empresa").value;
let cargo = document.getElementById("cargo").value;
let salario = document.getElementById("salario").value;
let descricao = document.getElementById("descricao").value;

let vaga = {
empresa: empresa,
cargo: cargo,
salario: salario,
descricao: descricao
};

let vagas = JSON.parse(localStorage.getItem("vagas")) || [];

vagas.push(vaga);

localStorage.setItem("vagas", JSON.stringify(vagas));

alert("Vaga publicada com sucesso!");

window.location.href = "vagas.html";

}