var campoFiltro = document.getElementById("filtro");
let mic = document.getElementById("mic");

window.SpeechRecognition = window.SpeechRecognition 
|| webkitSpeechRecognition;
// Criando uma instância da classe SpeechRecognition
var recognition = new SpeechRecognition();
// Definindo o idioma como português
recognition.lang = 'pt-BR';
// Adicionando um evento "result"
recognition.addEventListener("result", function(event){
  // Acessando o resultado através do parâmetro event
  var result = event.results[event.resultIndex];
  // Verificando se o resultado é final ou intermediário
  if (result.isFinal) {
    // Concatenando o texto transcrito à variável transcription
    transcricao = result[0].transcript;
    inputEscrito();
    mudarCor();
  }
  campoFiltro.value = transcricao;
 });
// Criando uma variável para armazenar o texto transcrito
var transcricao = "";

mic.addEventListener("click",function() {

    document.getElementById('mic').style.color = 'green';
    recognition.start(transcricao);
});

function mudarCor(){
  if(mic.style.color = 'green')
  document.getElementById('mic').style.color = 'red';
}