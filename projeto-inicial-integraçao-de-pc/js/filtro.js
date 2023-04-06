var campoFiltro = document.getElementById("filtro"); 


campoFiltro.addEventListener("input", inputEscrito);

function inputEscrito(){
    var pacientes = document.querySelectorAll(".paciente"); // tabela
    console.log("entrou")
    if(transcricao != ""){
     campoFiltro.value = transcricao
     console.log("entrou no if")
    }
    console.log("pasouu")
    if (campoFiltro.value != "") {
        pacientes.forEach(function (paciente) {
            var tdNome = paciente.querySelector(".info-nome"); // td
            var nome = tdNome.textContent; // innerHTML
            var resposta = new RegExp(campoFiltro.value, "i"); //Uma expressão regular é uma notação para representar padrões de Strings, ou seja, ela tem a função de validar entradas de dados ou para buscas.
            if (!resposta.test(nome)) {
                paciente.classList.add("invisivel"); // invisivel == display: none
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function (paciente) {
            var paciente = paciente;
            paciente.classList.remove("invisivel");
        });
    }
}
