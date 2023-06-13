const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

// Função para exibir mensagens no output
function displayMessage(message) {
  outputElement.innerHTML += `<p>${message}</p>`;
}

function what2do(bool){
  displayMessage("O que você quer fazer agora? viajar, investigar ou conversar?");
}

var cidades = ["vitoria", "vila velha", "cariacica", "viana", "piuma"]
  var viajar = 0;
  var investigar = 0;
  var conversar = 0;

// Função principal do jogo
function play() {
  const command = inputElement.value.trim().toLowerCase();
  
  // Lógica do jogo aqui
  switch (command) {
    case "iniciar":
      displayMessage("O jogo começou! Você é um detetive atrás de Carmen Sandiego.");
      displayMessage("Para encontrá-la, você deve à procurar dentre os lugares do Espírito Santo, foi lá que Carmen foi vista da última vez!");
      displayMessage("INVESTIGUE!!!")
      what2do(true);
      break;
    
    case "viajar":
      if (viajar <= 5){
        displayMessage("Na cidade de " + cidades[viajar] + " não há nada");
        viajar += 1;
      }
      if (cidades[viajar] == "cariacica"){
        displayMessage("Ela está aqui em cariacica!!!!");
        viajar += 1;
      }
      if (viajar > 5){
        displayMessage("Não adianta viajar mais");
      }
      break;

    case "investigar":
      if (investigar <= 4){
        displayMessage("Procure mais um pouco, recruta");
        investigar += 1;
      }
      else if (investigar == 5){
        displayMessage("Você a encontrou, parabéns!!! Carmen estava em Jardim América")
        displayMessage("Digite 'sair'")
      }
      break;

    case "conversar":
      displayMessage("Não adianta nada conversar com estranhos!!!");
      break;

    case "sair":
      displayMessage("Obrigado por jogar! Até a próxima.");
      break;

    default:
      displayMessage("Comando inválido.");
      break;
  }
  
  inputElement.value = "";
}
  

// Limpar o output ao recarregar a página
window.addEventListener("load", () => {
  outputElement.innerHTML = "";
});
