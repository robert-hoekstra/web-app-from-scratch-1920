import retrieve from "./modules/retrieve.js";
import router from "./modules/router.js";
import dom from './modules/dom.js'

startApp();

function startApp() {
  router.setRoutes();
  retrieve.navigationList();

  let selection = document.getElementById("categorySelect");
  selection.addEventListener("change", function() {
    const selectedSubject = this.value;
    dom.removeNode();
    retrieve.data(selectedSubject);
  });
}