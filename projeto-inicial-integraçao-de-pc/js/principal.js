var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach((paciente) => {

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var pesoEhValido = validaPacientePeso(peso); // true ou false
    var alturaEhValida = validaPacienteAltura(altura);
    
    if (!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("invalido")
    }
    
    if (!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("invalido")
    }
    
    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso,altura);
        tdImc.innerHTML = imc;
    }

})

function calculaImc(peso,altura){
    let imc = 0;

    imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2);

    return imc
}
    

