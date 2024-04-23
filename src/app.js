let icons = ["♦", "♥", "♠", "♣"];

window.onload = function getRandomIcon() {
  let container = document.createElement("div");
  container.classList.add("container");

  let icon = document.createElement("div");
  icon.id = "random";
  container.append(icon);

  let random = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#random").innerHTML = random;

  let icon2 = document.createElement("div");
  icon2.id = "randomIcon2";
  container.append(icon2);

  let randomIcon2 = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#randomIcon2").innerHTML = random;

  let num = document.createElement("div");
  num.id = "numeroAleatorio";
  container.append(num);
};

// ya generamos el icono aleatorio
// ahora hay que generar el número aleatorio

function getRandomInt(min, max) {
  // Genera dos valores aleatorios(especificando el parametro deseado)
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber == 11) {
    return "J";
  } else if (randomNumber == 12) {
    return "K";
  }
  return randomNumber;
}

let numero = getRandomInt(2, 13); // Excluye el último número, (no sé por qué)
document.querySelector("#numeroAleatorio").innerHTML = numero;
