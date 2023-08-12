const countries = [
  {
    name: 'Vitória',
    description: ['Capital do estado', 'Nela se encontra a Capela de Santa Luzia',
     'encontra-se, também, o palácio anchieta', 'a próxima dica é uma imagem, tente descobrir a cidade por ela'],
    imageURL: 'vitoria'
  },
  {
    name: 'Vila Velha',
    description: ['Lugar onde se encontra o Convento da Penha', 'Lar do Convento da Penha',
     'abriga a fábrica de chocolates Garoto', 'a próxima dica é uma imagem, tente descobrir a cidade por ela'],
    imageURL: 'vila_velha'
  },
  {
    name: 'Cariacica',
    description: ['Jardim América é um de seus bairros', 'Lar do estádio Kleber Andrade',
     'terra do Monte Mochuara', 'a próxima dica é uma imagem, tente descobrir a cidade por ela'],
    imageURL: 'cariacica'
  },
  {
    name: 'Serra',
    description: ['segundo município mais populoso do estado', 'Lar da Casa de Congo', 
    'Jacaraípe, Nova Almeida e Barcelona são alguns de seus bairros', 
    'a próxima dica é uma imagem, tente descobrir a cidade por ela'],
    imageURL: 'serra'
  },
  {
    name: 'Viana',
    description: ['Lar da Rampa do Urubu', 'possui uma bela vista no Mirante da Biquinha',
    'tem uma estação ferroviária muito antiga', 
    'a próxima dica é uma imagem, tente descobrir a cidade por ela'],
    imageURL: 'viana'
  }
];

const startButton = document.getElementById('start-button');
const travelButton = document.getElementById('travel-button');
const hintButton = document.getElementById('hint-button');
const resultElement = document.getElementById('result');
const hintElement = document.getElementById('hint');

startButton.addEventListener('click', () => {

  function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
  };

  var contador = 0;
  var targetCountry = getRandomCountry();
  
  console.log(targetCountry);

  hintButton.addEventListener('click', () => {
    if (contador < targetCountry.description.length) {
      const descriptionItem = targetCountry.description[contador];
      hintElement.textContent = ''; // Limpa o conteúdo anterior
      const hint = `Pista: ${descriptionItem}`;
      hintElement.textContent = hint;
      resultElement.textContent = '';
      contador += 1;
    }
    else if (contador === targetCountry.description.length) {
      const imageHint = document.createElement('img');
      imageHint.src = './' + targetCountry.imageURL + '.jpg'; // Use a extensão correta da imagem
      imageHint.alt = `Imagem para a dica ${contador + 1}`;
      imageHint.style.maxWidth = '100%';
      console.log(imageHint.src);

      // Adicione a imagem à div com o id 'image-hint'
      const imageHintContainer = document.getElementById('image-hint');
      imageHintContainer.innerHTML = ''; // Limpa o conteúdo anterior
      imageHintContainer.appendChild(imageHint);
      contador += 1;

    } 
    else {
      const hint = `Não há mais dicas`;
      hintElement.textContent = hint;
      document.getElementById('image-hint').innerHTML = ''; // Limpa a div de imagem
      resultElement.textContent = '';
    }
  });  
  
  travelButton.addEventListener('click', () => {
    const guessedCountry = prompt('Para onde você acha que o ladrão viajou?');
    if (guessedCountry.toLowerCase() === targetCountry.name.toLocaleLowerCase()) {
      resultElement.textContent = 'Parabéns! Você pegou o ladrão!';
    } else {
      resultElement.textContent = `Oops! O ladrão escapou para ${targetCountry.name}. Tente novamente!`;
    }
  });

});