var detail = function (stringParam) { removeData(), console.log(stringParam), renderCards()};
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


