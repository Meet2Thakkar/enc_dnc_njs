var words = {
    "raindow": 5,
    "unicorn": 3,
    "doom": -3,
    "goom": -1
}
var express = require('express');
var app = express ();

var server = app.listen(3000, listening);
function listening() {
    console.log("hey");
}

app.use(express.static('website'));

app.get('add/:word/:score', addWord);

function addWord(request, response) {
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    
    words[word] = score;

    var reply = {
        msg: "thank you"
    }

    response.send(reply);
}

app.get('/all', sendAll);

function sendAll(req,res){
    res.send(words);
}