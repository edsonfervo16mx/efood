// import package.json
var express = require("express");
var app = express();
// import routes
var router_stewp = require("./routes-stewp")

// archivos estaticos
app.use("/files",express.static("public"));

// motor de template
app.set("template engine","pug");

// renderizando las vistas
app.get("/",function(request,response){
	response.render("index.pug",{title: "¿Hambre?", subtitle: "Busca tu comida favorita con Stewp"});
})

app.get("/platform",function(request,response){
	response.render("platform.pug",{title: "Plataforma", subtitle: "La plataforma de gestión de restaurante más completa"});
})

// end vistas

// aplicando routes
app.use("/stewp",router_stewp);

// ejecutando las vistas
app.listen(8080);