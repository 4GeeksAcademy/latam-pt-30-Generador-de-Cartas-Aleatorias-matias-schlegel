let icons = ["♦", "♥", "♠", "♣"];

window.onload = function getRandomIcon() {
  let random = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#random").innerHTML = random;

  let randomIcon2 = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#randomIcon2").innerHTML = random;
};

// ya generamos el icono aleatorio
// ahora hay que generar el número aleatorio

function getRandomInt(min, max) {
  // Genera dos valores aleatorios(especificando el parametro deseado)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let numero = getRandomInt(2, 11); // Excluye el último número, (no sé por qué)
document.querySelector("#numeroAleatorio").innerHTML = numero;
