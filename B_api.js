var express = require('express');
var app = express ();

var server = app.listen(3000, listening);
function listening() {
    console.log("hey");
}

app.use(express.static('website'));

app.get('/search/:flower', sendFlower);

function sendFlower(request, response){
    var data = request.params;
    response.send('i love' + data.flower + 'too');
}