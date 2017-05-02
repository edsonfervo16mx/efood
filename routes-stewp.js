var express = require("express");
var router = express.Router();

router.get("/",function(request,response){
	response.render("stewp/index.pug")
});

module.exports = router;