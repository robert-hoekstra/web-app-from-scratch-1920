let selection = document.getElementById("categorySelect");
let collection = document.getElementById("collection");

// fetch data
startApp();

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

function renderCards(myJson) {
  localStorage.setItem("data", JSON.stringify(myJson));
  console.log("renderCards function: ", myJson);
  // Declare variables
  let categories = Object.keys(myJson);
  categories.forEach(element => {
    selection.insertAdjacentHTML(
      "beforeend",
      `<option value="${element}"> ${element}</option>`
    );
  });
}

function createRouter() {
  var detail = function(stringParam) {
    extraInformation(stringParam);
  };
  var about = function() {
    removeData(), console.log("aboutpagina");
  };
  var credit = function() {
    removeData(), console.log("creditpagina");
  };

  var routes = {
    "/about": about,
    "/credit": credit,
    "/:stringParam": detail
  };

  var router = Router(routes);
  console.log("Director loaded");

  router.init();
}

function extraInformation(stringParam) {
  removeData();
  console.log(stringParam);

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
      console.log(data);
      return data;
    })

    .then(data => {
      console.log(data);
      data.map(item => {
        collection.insertAdjacentHTML(
          "beforeend",
          `<section>
    <img src="${item.images.original.url}"></section>`
        );
      });
    });

  console.log(gliphy);
}

function retrieveItems(parameter) {
  fetch("https://swapi.co/api/" + parameter)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      localStorage.setItem("collection", JSON.stringify(myJson));
      console.log(myJson);
      // Declare variables
      let items = myJson.results;
      console.log(Object.entries(items));
      // Delete properties selectedSubject are not needed
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
            console.log(json.data[0].images.original.url);
            let data = json.data[0].images.original.url;
            console.log(data);
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
    });
}

function getData(parameter) {
  if (localStorage.getItem("collection")) {
    console.log("local storage found");
  } else {
    console.log("local storage not found");
  }
  retrieveItems(parameter);
}

function removeData() {
  let htmlParent = document.getElementById("collection");
  while (htmlParent.firstChild) {
    htmlParent.removeChild(htmlParent.firstChild);
  }
}

function retrieveNavigation() {
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



function startApp() {
  createRouter();
  retrieveNavigation();

  selection.addEventListener("change", function() {
    const selectedSubject = this.value;
    removeData();
    getData(selectedSubject);
  });
}

import log from "/js/modules/api.js";
// import retrieveNavigation from "/js/modules/retrieve.js"

log();

