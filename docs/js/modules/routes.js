import retrieve from "./retrieve.js"
import dom from "./dom.js"

function Create() {
  var detail = function(stringParam) {
    retrieve.Information(stringParam), console.log(stringParam);
  };
  var about = function() {
    dom.Remove(), console.log("aboutpagina");
  };
  var credit = function() {
    dom.Remove(), console.log("creditpagina");
  };

  var notFound = function() {
    dom.Remove()
  }

  var routes = {
    "/about": about,
    "/credit": credit,
    "/:stringParam": detail,
    "/:*": notFound 
  };

  var router = Router(routes);
  console.log("Director loaded");

  router.init();
}


export default {Create}