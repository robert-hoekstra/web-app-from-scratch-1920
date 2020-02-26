import retrieve from "/js/modules/retrieve.js";
import routes from "/js/modules/routes.js";
import dom from "/js/modules/dom.js";
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