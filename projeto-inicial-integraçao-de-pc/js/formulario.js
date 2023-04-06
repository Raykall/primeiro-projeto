const formulario = document.querySelector("[data-formulario]");
const tabelaPaciente = document.querySelector("#tabela-pacientes");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const formData = new FormData(formulario);

  const nome = formData.get("nome");
  const peso = Number(formData.get("peso"));
  const altura = Number(formData.get("altura"));
  const gordura = Number(formData.get("gordura"));
  const erros = validaNovoPaciente(nome, peso, altura, gordura);
   
    erros.length ? exibeMensagemDeErro(erros) : criarPaciente(nome, peso, altura, gordura);
    
});

function criarPaciente(nome, peso, altura, gordura) {
  tabelaPaciente.innerHTML += `
                <tr class="paciente" >
							<td class="info-nome">${nome}</td>
							<td class="info-peso">${peso}</td>
							<td class="info-altura">${altura}</td>
							<td class="info-gordura">${gordura}</td>
							<td class="info-imc">${calculaImc(peso, altura)}</td>
              <td class="fa fa-trash " id="icon"></td>
						</tr>
    `;
}