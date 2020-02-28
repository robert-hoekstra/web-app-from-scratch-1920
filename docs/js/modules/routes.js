import retrieve from "./retrieve.js"
import dom from "./dom.js"

function Create() {
  let detail = function(stringParam) {
    retrieve.Information(stringParam), console.log(stringParam);
  };
  let about = function() {
    dom.Remove(), console.log("aboutpagina");
  };
  let credit = function() {
    dom.Remove(), console.log("creditpagina");
  };

  let notFound = function() {
    dom.Remove()
  }

  let routes = {
    "/about": about,
    "/credit": credit,
    "/:stringParam": detail,
    "/:*": notFound 
  };

  let router = Router(routes);
  console.log("Director loaded");

  router.init();
}


export default {Create}