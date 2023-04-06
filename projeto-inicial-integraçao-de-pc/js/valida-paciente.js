function validaPacientePeso(peso) {
  //essa regra é para validar => true ou false lá na verificação da "principal.js"
  if (peso >= 0 && peso < 300) {
    return true;
  } else {
    return false;
  }

}

function validaPacienteAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function validaNovoPaciente(nome, peso, altura, gordura) {
  const erros = [];
  
  if(!nome){
    erros.push("O nome não pode ficar em branco");
  }

  if (!validaPacientePeso(peso)) { 
    erros.push("Peso é invalido");
  }

  if (!validaPacienteAltura(altura)) {
    erros.push("Altura é invalida");
  }
  
  if (!gordura) {
    erros.push("A gordura não pode ficar em branco");
  }
  return erros;
}

function exibeMensagemDeErro(erros){
  let mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";
  erros.forEach((erro) => {
      let li = document.createElement("li");
      li.textContent = erro;
      mensagemErro.appendChild(li);
  });
}