var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
  'article-one': {
    heading: 'Likita',
    title: 'Article one',
    content: 
    `<p>
    This is my web page developed by Likita This is my web page developed by Likita
    This is my web page developed by LikitaThis is my web page developed by Likita
    </p>
    
    <p>
    This is my web page developed by Likita This is my web page developed by Likita
    This is my web page developed by Likita This is my web page developed by Likita
    </p>
   
    <p>
    This is my web page developed by Likita This is my web page developed by Likita
    This is my web page developed by Likita This is my web page developed by Likita
    </p>`
} ,
  'article-two' : {
    heading: '<h1>Hi! this is Likita...</h1>',
    title: 'Article two',
    content: 
    `<p>This is my second web page developed by Likita 
This is my second web page developed by Likita </p>
`
} ,
  'article-three' : {
    heading: '<h1>Hello this my next web page</h1>',
    title: 'Article three',
    content: 
    `<p>This is my third web page developed by Likita 
This is my third web page developed by Likita </p>`
},
  'article-four' : {
    heading: '<h2>Article four</h2>',
    title: 'Article four',
    content: '<p>This is fourth articles...</p>'
  }
};

function createTemplate (data)
{
var title = data.title; 
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
   <!doctype html>
<html>
    <head>
<title>${title} </title>
<meta name="viewport" content="width-device, initial-scale-1" />
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
    <a href="/">Home</a>
    <hr> 
    </div>
    
<h1>${heading}</h1>
<div>
${content}
</div>
</div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name/:name', function (req, res) {
  var name = req.paras.name;
  names.path(name);
  res.send(JSON.stringify(name));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
