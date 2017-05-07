var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser")

//use body parser  
app.use(bodyParser.urlencoded({extended: true})); 

//use public folder
app.use(express.static("public"));
//set default engine
app.set("view engine", "ejs");



//ROUTES

//home route
app.get("/", function(req, res){
     res.render("home");
});


//page route
app.get("/page/:id", function(req, res){
   var value = req.params.id;
   res.render("page", { val: value});
});


//loop route
app.get("/loop", function(req, res){
  var movies=[
     { title : "Lord of the rings", actor :"Frodo and Smiggle"},
      { title : "Avengers", actor :"Michael Smith"},
       { title : "Vikings", actor :"Ragnar lothbrook"},
  ]
  res.render("loop", {loopMovie : movies});
});



//array of list items
 var list=[
        "krane",
        "parker",
        "temple",
        "wrekage"
  ];


//list route
app.get("/list", function(req, res){
 res.render("list", {addItem : list});
});



//route handle post request
app.post("/additem", function(req, res){
  var newItem = req.body.newItem;
  list.push(newItem);
 res.redirect("/list");

});





app.listen(3000, function(){
    console.log("server is up and running!");
});