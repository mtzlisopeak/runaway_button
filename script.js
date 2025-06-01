const coracoes = ["💗", "💕", "💓", "💖"];

function criarCoracao() {
  const el = document.createElement("div");
  el.classList.add("heart");

  // Sorteia emoji e posição
  el.innerHTML = coracoes[Math.floor(Math.random() * coracoes.length)];
  el.style.left = `${Math.random() * 90}%`;
  el.style.fontSize = `${24 + Math.random() * 16}px`; // tamanhos variados

  document.body.appendChild(el);

  // Remove após a animação
  setTimeout(() => el.remove(), 4000);
}

// Gera um novo coração a cada 500ms
setInterval(criarCoracao, 1000);

const botaoFug = document.querySelector(".fug");
const botaoSim = document.querySelector(".sim");
const resposta = document.querySelector("#resposta")
botaoSim.addEventListener("click", function(e) {
  const resposta = document.querySelector("#resposta");
  resposta.style.display = "block";
  botaoFug.style.display = "none"
  botaoSim.style.display = "none"

  // Garante que o browser aplique o fade corretamente
  setTimeout(() => {
    resposta.style.opacity = 1;
  }, 10);
});
const distancia = 80;

function moverBotao() {
  const largura = window.innerWidth - botaoFug.offsetWidth;
  const altura = window.innerHeight - botaoFug.offsetHeight;

  botaoFug.style.position = "absolute"
  const novaPosX = Math.random() * largura;
  const novaPosY = Math.random() * altura;

  botaoFug.style.left = `${novaPosX}px`;
  botaoFug.style.top = `${novaPosY}px`;
}

// Para mouse: quando o mouse se aproxima
botaoFug.addEventListener('mouseover', moverBotao);

// Para celular: quando tocar no botão
botaoFug.addEventListener('touchstart', function(e) {
  e.preventDefault(); // Impede o clique
  moverBotao();
});
