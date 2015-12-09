var express = require('express'),
    app = express(),
    path = require('path'),
    low = require('lowdb'),
    db = low('db.json'),
    bodyParser = require('body-parser'),
    port = 4000;

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

//Create 7 Standard Routes for CRUD
app.get('/', function( request, response ){
  //New page - show all the squirrels
  var squirrels = db('squirrels').value();
  response.render('index', {title: 'Squirrels of the World'});
  console.log('Show all the squirrels!');
});

// app.post('/squirrel', function( request, response ){
//   //Create a new squirrel
//   console.log('create a new squirrel');
// });
//
// app.get('/squirrel/:name', function( request, response ){
//   //Create individual?
//   console.log('create an individual squirrel??');
// });
//
// app.get('/', function( request, response ){
//   //Edit the squirrel
//   console.log('edit a squirrel');
// });
//
// app.put('/', function( request, response ){
//   //Edit request?
//   console.log('edit something else??');
// });
//
// app.delete('/', function( request, response ){
//   //Delete the squirrel
//   console.log('delete a squirrel');
// });

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
