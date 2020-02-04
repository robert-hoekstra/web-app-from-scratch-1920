let button = document.querySelector('#button')
let selection = document.getElementById("categorySelect")
let collection = document.getElementById("collection")

// fetch data
fetch('https://swapi.co/api/')
  .then((response) => {

    return response.json();
    
  })
  .then((myJson) => {
    console.log(myJson)
    // Declare variables
    let categories = Object.keys(myJson)
    categories.forEach(element => {
      selection.insertAdjacentHTML('beforeend', `<option value="${element}"> ${element}</option>`)
    });

    })
    .catch((err) => {
      console.log(err)
    });
// Retrieve data from selected value
selection.onchange = getData, removeData;
function removeData(){
  
}
function getData(){
  var value = this.value
  console.log(value);
  
fetch('https://swapi.co/api/' + value)
.then((response) => {

  return response.json();
  
})
.then((myJson) => {
  console.log(myJson)
  // Declare variables
  let items = myJson.results
  console.log(items)
  collection.remove
  // newItems = items.filter(item => { console.log(item.key)})
  // console.log(newItems, 'aaaaaaaaaa')
  
  items.forEach(element => {
  
    collection.insertAdjacentHTML('afterbegin', `<section id="${element}"></section>`)
    let placeholder = document.getElementById(element)

    // collection.insertAdjacentHTML('beforeend',`<p>${JSON.stringify(element)}</p>`)
    Object.entries(element).forEach(([key, value]) => {
     if((key !== "homeworld") ||(key !== "people")||( key !==  "url")){
      return placeholder.insertAdjacentHTML('beforeend', `<li>${key}: ${value}</li>`)
    }})
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