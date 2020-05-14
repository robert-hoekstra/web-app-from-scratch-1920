import sort from "./sort.js";

function cards(myJson) {
  localStorage.setItem("data", JSON.stringify(myJson));
  console.log("renderCards function: ", myJson);
  // Declare variables
  let categories = Object.keys(myJson);
  let selection = document.getElementById("categorySelect");
  categories.forEach((element) => {
    selection.insertAdjacentHTML(
      "beforeend",
      `<option value="${element}"> ${element}</option>`
    );
  });
}

function items(parameter) {
  fetch("https://swapi.dev/api/" + parameter)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      localStorage.setItem("collection", JSON.stringify(myJson));
      // Declare variables
      let items = myJson.results;
      console.log(items)

      // let sortedData = items.sort(sort.byName());
      // console.log(sortedData)  // Waarom werkt dit modulair niet?

      
// Stackoverflow sorting array : https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
      let sortedData = items.sort(function(a,b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      // Flip array om in de juiste volgorde te schrijven naar DOM
      sortedData.reverse()

      console.log(sortedData)
      
      // Map function
      let dataByClassification = sortedData.map(function (classification) {
        return classification.classification;
      });

      // reduce function
      let totalHeight = sortedData.reduce(function (box, classification) {
        return box + parseInt(classification.average_height);
      }, 0);

      // Filter function
      let mammals = sortedData.filter(function (mammals) {
        return mammals.classification === "mammal";
      });

      // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates <-- best answer
      let uniqueClassifications = Array.from(new Set(dataByClassification));

      // Delete properties selected Subjects are not needed
      sortedData.forEach((element) => {
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

        let searchParameter = Object.values(element)[0];

        let gliphy = fetch(
          "https://api.giphy.com/v1/gifs/search?q=" +
            searchParameter +
            "&api_key=LbgPba4AyUN7TJegTW04LfSc1zAhl8Z5&limit=1"
        );

        // Met hulp van Tomas Stolp voor fetch chain
        gliphy
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            let data = json.data[0].images.original.url;
            return data;
          })
          .then((data) => {

            console.log(data)
            collection.insertAdjacentHTML(
              "afterbegin",
              `<section id="${element}">
              <a href="#/${searchParameter.replace(
                /\s+/g,
                ""
              )}"><img src="${data}"><p class="instructions">Click the image for even more images!</p></section></a>`
            );
            let placeholder = document.getElementById(element);
            Object.entries(element).forEach(([key, value]) => {
              placeholder.insertAdjacentHTML(
                "beforeend",
                `<li class="entries">${key.toUpperCase(key)}: ${value}</li>`
              );
            });
          });
      });
      //Insert facts to DOM
      collection.insertAdjacentHTML(
        "beforeend",
        `<u id="speciesdata"><li>${sortedData.length} Species found!</li> <li>${
          uniqueClassifications.length
        } Unique families with an average height of ${
          totalHeight / 10
        }m</li><li>Of which ${mammals.length} Mammals!</li><ul>`
      );
    });
}

export default { cards, items };
