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
	response.render("platform.pug",{title: "Plataforma", subtitle: "La plataforma de restaurantes más completa"});
})

app.get("/signup",function(request,response){
	response.render("signup.pug",{title: "Registro", subtitle: "Solo necesitas una cuenta"});
})

app.get("/signin",function(request,response){
	response.render("signin.pug",{title: "Iniciar sesión", subtitle: "La mejor experiencia en comida"});
})

// end vistas

// aplicando routes
app.use("/stewp",router_stewp);

// ejecutando las vistas
app.listen(8080);