import renderCards from "./render.js";
import dom from "./dom.js";
import sort from "./sort.js";

function Navigation() {
  fetch("https://swapi.co/api/")
    .then(response => {
      return response.json();
    })
    .then(myJson => renderCards(myJson))
    // .then(renderCards => removeData(renderCards))
    .catch(err => {
      console.log(err);
    });
}

function Information(stringParam) {
  dom.Remove();

  collection.insertAdjacentHTML(
    "afterbegin",
    `<h1>Details: ${stringParam}</h1>`
  );
  let gliphy = fetch(
    "https://api.giphy.com/v1/gifs/search?q=" +
      stringParam +
      "&api_key=LbgPba4AyUN7TJegTW04LfSc1zAhl8Z5&limit=20"
  );

  gliphy
    .then(response => {
      return response.json();
    })
    .then(json => {
      let data = json.data;
      return data;
    })

    .then(data => {
      data.map(item => {
        collection.insertAdjacentHTML(
          "beforeend",
          `<section>
      <img src="${item.images.original.url}"></section>`
        );
      });
    });
}

function Data(parameter) {
  if (localStorage.getItem("collection")) {
    console.log("local storage found");
  } else {
    console.log("local storage not found");
  }
  Items(parameter);
}

function Items(parameter) {
  fetch("https://swapi.co/api/" + parameter)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      localStorage.setItem("collection", JSON.stringify(myJson));
      // Declare variables
      let items = myJson.results;
      let sortedData = items.sort(sort.byName);

      // Map function
      let dataByClassification = sortedData.map(function(classification) {
        return classification.classification;
      });

      // reduce function
      let totalHeight = sortedData.reduce(function(box, classification) {
        return box + parseInt(classification.average_height);
      }, 0);

      // Filter function
      let mammals = sortedData.filter(function(mammals) {
        return mammals.classification === "mammal";
      });

      // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates <-- best answer
      let uniqueClassifications = Array.from(new Set(dataByClassification));

      // Delete properties selected Subjects are not needed
      sortedData.forEach(element => {
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
          .then(response => {
            return response.json();
          })
          .then(json => {
            let data = json.data[0].images.original.url;
            return data;
          })
          .then(data => {
            collection.insertAdjacentHTML(
              "afterbegin",
              `<section id="${element}">
            <a href="#/${searchParameter.replace(
              /\s+/g,
              ""
            )}"><img src="${data}"></section></a>`
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
      //Insert facts to DOM
      collection.insertAdjacentHTML(
        "beforeend",
        `<ul id="speciesdata"><li>${
          sortedData.length
        } Species found!</li> <li>${
          uniqueClassifications.length
        } Unique families with an average height of ${totalHeight /
          10}m</li><li>Of which ${mammals.length} Mammals!</li><ul>`
      );
    });
}

export default { Navigation, Information, Items, Data };
