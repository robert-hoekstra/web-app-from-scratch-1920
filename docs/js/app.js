import retrieve from "/js/modules/retrieve.js"
import routes from "/js/modules/routes.js"
import dom from "/js/modules/dom.js"


// fetch data
startApp();

// https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

function startApp() {
  routes.create();
  retrieve.Navigation();

  let selection = document.getElementById("categorySelect");
  selection.addEventListener("change", function() {
    const selectedSubject = this.value;
    dom.remove();
    retrieve.Data(selectedSubject);
  });
}






