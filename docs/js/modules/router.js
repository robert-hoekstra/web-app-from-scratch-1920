import retrieve from "./retrieve.js"
import dom from "./dom.js"

function SetRoutes() {
  let detail = function(stringParam) {
    retrieve.Information(stringParam), console.log(stringParam);
  };
  let about = function() {
    dom.RemoveNode(), console.log("aboutpagina");
  };
  let credit = function() {
    dom.RemoveNode(), console.log("creditpagina");
  };

  let notFound = function() {
    dom.RemoveNode()
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


export default {SetRoutes}