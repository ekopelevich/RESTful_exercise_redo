var express = require('express'),
    app = express(),
    path = require('path'),
    low = require('lowdb'),
    db = low('db.json'),
    jade = require('jade'),
    busboyBodyParser = require('busboy-body-parser'),
    port = 4000;

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(busboyBodyParser());

//Create 7 Standard Routes for CRUD

// New page - show all the squirrels 1.
// GET '/squirrels/new' // Create - send the form to the client/browser
// to render/create the data
app.get('/squirrel', function( request, response ){
  var squirrels = db('squirrels').value();
  response.render('index', {title: 'Squirrels of the World'});
  console.log('Show all the squirrels!');
});

// POST '/puppies/new' // Handle submission
app.get('/squirrels/new', function( request, response ){
  response.render('new', {title: 'Create a New Squirrel'});
  console.log('create a new squirrel');
});

//POST Create a new squirrel ???
app.post('/squirrels/new', function (request, response) {
  var name = req.body.name;
  var breed = req.body.breed;
  db('squirrels').push({name: name, type: type});
  response.redirect('/squirrel');
});

// GET Create individual Resource (display form)
app.get('/squirrels/:name', function( request, response ){
  console.log('create an individual squirrel??');
});

//Edit the squirrel
app.get('/squirrels/:name', function( request, response ){
  var squirrel = db('squirrels').find({name: req.params.name});
  res.render('edit', {squirrel: squirrel});
  console.log('edit a squirrel');
});

//Edit request?
app.put('/squirrels/:name/edit', function( request, response ){
  var name = req.body.name;
  var type = req.body.breed;
  var squirrel = db('squirrels').chain().find({name: req.params.name}).assign({name: name, type: type}).value();
  console.log('edit something else?');
});

// app.delete('/', function( request, response ){
//   console.log('delete a squirrel');
// });

//Delete the squirrel
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
