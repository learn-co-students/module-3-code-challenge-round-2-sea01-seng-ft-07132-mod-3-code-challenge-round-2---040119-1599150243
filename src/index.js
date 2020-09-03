const Beerbar = document.querySelector("#list-group");
const Beerdetailcard = document.querySelector("#beer-detail");

//FUNCTION CALLING
fetchGetAllbeers();
Listentosave();

//LISTENERS

function Listentosave() {
  Beerdetailcard.addEventListener("submit", Handletosave);
}

//HANDLERS

function Handletosave(event) {
  event.preventDefault();
  console.log("Hiii");
  // //   const Dinput = event.target.descri;
  // //   const D = Dinput.value;

  // //   const newDescri = {
  // //     description: D

  // //     //fetchPATCHdescription(newDescri);
  // //     Dinput.value = ""
}

//FETCHES

function fetchGetAllbeers() {
  fetch("http://127.0.0.1:3001/beers")
    .then((response) => response.json())
    .then((Allbeers) => renderBeerss(Allbeers));
}
function fetchPATCHdescription(newDescri) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDescri),
  };
  fetch(`http://127.0.0.1:3001/beers`, options);
}

//DOM MANIPULATION

function renderBeerss(Allbeers) {
  //console.log(Allbeers);
  Allbeers.forEach((Allbeer) => appendBeer(Allbeer));
}

function appendBeer(Allbeer) {
  Beerbar.innerHTML += barbeer(Allbeer);
  Beerdetailcard.innerHTML += beerDetailCard(Allbeer);
}

function barbeer(Allbeer) {
  return `<li class="list-group-item">${Allbeer.name} </li>`;
}

function beerDetailCard(Allbeer) {
  return `
  <form class="calories-form">
  <h1>${Allbeer.name}</h1>
  <img src="${Allbeer.image_url}">
  <h3>${Allbeer.tagline}</h3>
  <textarea><input type="textarea" placeholder=${Allbeer.description} name="descri" /></textarea>
  

<input type="submit" class="btn btn-info value="Save" />
  </form>`;
}
