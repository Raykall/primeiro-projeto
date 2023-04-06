/* let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        let erroAjax = document.getElementById("erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach((paciente) =>{
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});  */

function adicionaPacienteNaTabela(paciente){
    tabelaPaciente.innerHTML += `
                <tr class="paciente" >
							<td class="info-nome">${paciente.nome}</td>
							<td class="info-peso">${paciente.peso}</td>
							<td class="info-altura">${paciente.altura}</td>
							<td class="info-gordura">${paciente.gordura}</td>
							<td class="info-imc">${paciente.imc}</td>
              <td class="fa fa-trash " id="icon"></td>
						</tr>
    `;
}


const url = 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json'
const buttonBuscarPacientes = document.querySelector('#buscar-pacientes')

buttonBuscarPacientes.addEventListener('click', async function() {
    const resposta = await fetch(url)
    const data = await resposta.json()
    let erroAjax = document.getElementById("erro-ajax");

    if(data){
        erroAjax.classList.add("invisivel")
        data.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente)
        })
    
    }else{
        erroAjax.classList.remove("invisivel");
    }
    
}); 
