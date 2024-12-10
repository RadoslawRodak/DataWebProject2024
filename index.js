var express = require('express')
var app = express()

var detailRequests = 0;
var serverRequests = 0;

app.use((req, res, next) => {
    console.log("MIDDLEWARE")
    next()
})

var updateServeReq = function (req, res, next) {
    console.log("Website accessed", ++serverRequests, "times")
    next()
}




app.get("/", [updateServeReq], (req, res) => {
    console.log("GET")
    res.sendFile(__dirname+"/pages/home.html")
})

app.get("/about", [updateServeReq], (req, res) => {
    console.log("ABOUT")
    res.sendFile(__dirname+"/pages/about.html")
})

app.get("/details", [updateServeReq], (req, res) => {
    console.log("DETAILS")
    var d = new Date()
    console.log("/details request number:", ++detailRequests, "from:", req.hostname, "at:", d.getHours(), ":", d.getMinutes(), ":", d.getSeconds())
    res.redirect("/")
})

app.listen(3004, () => {
    console.log("Application listening on port 3004")
})