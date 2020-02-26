import retrieve from "./modules/retrieve.js";
import routes from "./modules/routes.js";

import dom from './modules/dom.js'

startApp();

function startApp() {
  routes.Create();
  retrieve.Navigation();

  let selection = document.getElementById("categorySelect");
  selection.addEventListener("change", function() {
    const selectedSubject = this.value;
    dom.Remove();
    retrieve.Data(selectedSubject);
  });
}