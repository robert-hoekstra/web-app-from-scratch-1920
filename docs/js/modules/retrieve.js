import render from "./render.js";
import dom from "./dom.js";


function NavigationList() {
  fetch("https://swapi.dev/api/")
    .then(response => {
      return response.json();
    })
    .then(myJson => render.Cards(myJson))
    // .then(renderCards => removeData(renderCards))
    .catch(err => {
      console.log(err);
    });
}

function Information(stringParam) {
  dom.RemoveNode();

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


      collection.insertAdjacentHTML("beforeend", `<section><a href="/">Back to start</a></section>`)
    });

}

function Data(parameter) {
  if (localStorage.getItem("collection")) {
    console.log("local storage found");
  } else {
    console.log("local storage not found");
  }
  render.Items(parameter);
}

export default { NavigationList, Information, Data };
