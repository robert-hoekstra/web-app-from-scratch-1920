import retrieve from "/js/modules/retrieve.js"
import dom from "/js/modules/dom.js"

function create() {
  var detail = function(stringParam) {
    retrieve.Information(stringParam);
  };
  var about = function() {
    dom.remove(), console.log("aboutpagina");
  };
  var credit = function() {
    dom.remove(), console.log("creditpagina");
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


export default {create}