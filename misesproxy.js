var express = require('express');
var jsdom = require("jsdom");
var app = express();

app.get('/', function (req, res) {

  jsdom.env(
  "http://www.mises.org.br/Articles_Thumbs.aspx",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {

   var $ = window.$;

   var content = "";

    $(".thumbsArticle").each(function() {
      content += "<a href='/article?article=" + $(this).attr("href") + "' >" + $(this).text()$
      content += "<br> <br>";
    });

   res.send(content);
  }
);
});

app.get('/article', function(req, res){

  var article = req.param('article');

  jsdom.env(
  "http://www.mises.org.br/" + article,
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {

   var $ = window.$;

   var content = "";

   $(".mis-text").find("p").each(function() {
      content += $(this).text();
      content += "<br> <br>";
   });

   res.send(content);
  }
);
});

app.listen(3000, function () {
  console.log('App running on port 3000');
});
