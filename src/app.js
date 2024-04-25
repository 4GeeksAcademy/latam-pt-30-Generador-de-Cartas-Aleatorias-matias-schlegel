let icons = ["♦", "♥", "♠", "♣"];
let corazon = icons[1];

let funcion = (window.onload = function() {
  document.querySelector(".container");

  /* let icon = document.createElement("div");
  icon.id = "random";
  container.appendChild(icon); */

  let random = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#random").innerHTML = random;

  /* let icon2 = document.createElement("div");
  icon2.id = "randomIcon2";
  container.appendChild(icon2); */

  let randomIcon2 = icons[Math.floor(Math.random() * icons.length)];
  document.querySelector("#randomIcon2").innerHTML = random;

  if (random === corazon || randomIcon2 === corazon) {
    document.querySelector("#random").style.color = "red";
    document.querySelector("#randomIcon2").style.color = "red";
  } //cuando actulizo la pagina aveces se cambian otros signos de color (no sé por qué)

  /* let num = document.createElement("div");
  num.id = "numeroAleatorio";
  container.append(num); */
});

// ya generamos el icono aleatorio
// ahora hay que generar el número aleatorio

function randomNum(min, max) {
  // Genera dos valores aleatorios(especificando el parametro deseado)
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber == 11) {
    return "J";
  } else if (randomNumber == 12) {
    return "K";
  }
  return randomNumber;
}

let numero = randomNum(2, 13); // Excluye el último número, (no sé por qué)
document.querySelector("#numeroAleatorio").innerHTML = numero;
