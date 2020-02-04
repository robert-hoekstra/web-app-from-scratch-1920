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
selection.onchange = getData;
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
  items.forEach(element => {
    collection.insertAdjacentHTML('beforeend', `<p>${stringify(element)}</p>`)
  });
  });
} 



