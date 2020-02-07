let button = document.querySelector("#button");
let selection = document.getElementById("categorySelect");
let collection = document.getElementById("collection");


// fetch data
fetch("https://swapi.co/api/")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
    // Declare variables
    let categories = Object.keys(myJson);
    categories.forEach(element => {
      selection.insertAdjacentHTML(
        "beforeend",
        `<option value="${element}"> ${element}</option>`
      );
    });
  })
  .catch(err => {
    console.log(err);
  });
// Retrieve data from selected value
(selection.onchange = removeData);
function removeData() {
  let myNode = document.getElementById("collection");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);

  }
  return getData(this)

}
function getData(parameter) {
  // collection.innerHTML = "";
  var value = parameter.value;
  console.log(value);

  fetch("https://swapi.co/api/" + value)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      // Declare variables
      let items = myJson.results;
      console.log(Object.entries(items));
    
      items.forEach(element => {
        delete element.homeworld;
        delete element.url;
        delete element.people;
        delete element.films;
        delete element.created;
        delete element.edited;
        delete element.vehicles;
        delete element.starships;
        delete element.characters;
        delete element.planets;
        delete element.species;
        delete element.pilots;
        delete element.residents;
        
        collection.insertAdjacentHTML(
          "afterbegin",
          `<section id="${element}">
          <img src="https://picsum.photos/400" alt="random picture"></section>`
        );
        let placeholder = document.getElementById(element);

        Object.entries(element).forEach(([key, value]) => {
          placeholder.insertAdjacentHTML(
            "beforeend",
            `<li>${key.toUpperCase(key)}: ${value}</li>`
            
          );
        });
      });
    });
}

// function makeElement(element){
//   return document.createElement(element)
// }
// function creatLi(element, content){
//   let li = document.createElement(element)
//   li.innerText= content
//   return li
// }
// function appendElemnten(element, parentelement){
//   return parentelement.appendChild(element)
// }

// let ul = makeElement("ul")
// let films = creatLi("li", item.films)
// ul.appendChild(films)
// collection.appendChild(ul)
