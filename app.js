const express = require('express')
var app = new express()
//rutes to the app
const HelloWord = require('./api/controller/HelloWorldController')



app.use('/', HelloWord)

module.exports = app;