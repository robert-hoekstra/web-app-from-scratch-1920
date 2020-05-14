import retrieve from "./retrieve.js"
import dom from "./dom.js"

function setRoutes() {
  let detail = function(stringParam) {
    retrieve.information(stringParam), console.log(stringParam);
  };
  let about = function() {
    dom.removeNode(), console.log("aboutpagina");
  };
  let credit = function() {
    dom.removeNode(), console.log("creditpagina");
  };

  let notFound = function() {
    dom.removeNode()
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


export default {setRoutes}