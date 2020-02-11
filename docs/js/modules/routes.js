var detail = function (stringParam) { console.log(stringParam)};
var about = function () { removeData(), console.log("aboutpagina"); };
var credit = function () { removeData(), console.log("creditpagina")};

var routes = {
  '/about': about,
  '/credit': credit,
  '/:stringParam': detail,
  }

var router = Router(routes);
console.log("Director loaded")

router.init();


