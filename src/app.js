const who = [
  "El perro",
  "El terodactilo",
  "La mosca",
  "El Terremoto",
  "El tornado"
];
const action = ["revento", "cago", "desintegro", "calcino", "exploto"];
const what = [
  "mi fuente de alimentacion",
  "mi nave",
  "mi conciencia",
  "mi cuaderno",
  "mi proyecto"
];
const when = [
  "ayer",
  "hace unos momentos",
  "antes de clases",
  "mientras me duchaba",
  "cuando estaba en la cocina"
];
//Array de array
const dataset = [who, action, what, when];

//Funcion que da numero aleatorio.
const RandomNumber = arr => Math.floor(Math.random() * arr.length);

//Funcion random item
const GetItem = (arr, i) => arr[i];

//Sacar un string
const GetString = v => `${GetItem(v, RandomNumber(v))} `;

//Función que hace la excusa Random.

const excuseGenerator = dataset =>
  dataset.reduce((acc = "", item) => (acc += `${GetString(item)}`), undefined);

//Selección del tag de HTML para aplicar la función.
const paragraf = document.querySelector("#excuse");
window.onload = function() {
  //imprime la excusa
  paragraf.innerHTML = excuseGenerator(dataset);
};
