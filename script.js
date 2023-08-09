const countries = [
  {
    name: 'Vitória',
    description: 'TERRAAAAA COM AGUA'
  },
  {
    name: 'Vila Velha',
    description: 'Terra do KN'
  },
  {
    name: 'Cariacica',
    description: 'Bosta seca'
  },
  {
    name: 'Serra',
    description: 'Assalto'
  },
  {
    name: 'Viana',
    description: 'Ta la né'
  }
];

const travelButton = document.getElementById('travel-button');
const hintButton = document.getElementById('hint-button');
const resultElement = document.getElementById('result');
const hintElement = document.getElementById('hint');

let targetCountry; 

function getRandomCountry() {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

function generateHint(targetCountry) {
  return `Pista: ${targetCountry.description}`;
}

hintButton.addEventListener('click', () => {
  targetCountry = getRandomCountry();
  const hint = generateHint(targetCountry);
  hintElement.textContent = hint;
  resultElement.textContent = ''; 
});

travelButton.addEventListener('click', () => {
  const guessedCountry = prompt('Para onde você acha que o ladrão viajou?');
  
  if (guessedCountry === targetCountry.name) {
    resultElement.textContent = 'Parabéns! Você pegou o ladrão!';
  } else {
    resultElement.textContent = `Oops! O ladrão escapou para ${targetCountry.name}. Tente novamente!`;
  }
});
