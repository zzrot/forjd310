var express = require('express');
var path = require('path');
var nodemailer = require("nodemailer");
var mime = require("mime");
var app = express();
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "YOUREMAIL@gmail.com",
pass: "PASSWORD TO GMAIL ACT GOES HERE"
}
});
var root = path.normalize(__dirname + '/..');
//config
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
 
app.use(express.static(root + '/public'));
app.use(express.static(root + '/bower_components'));
//routes
app.get('',function(req,res){
        res.render('../public/views/index.html')
});


app.get('/send',function(req,res){
var mailOptions={
to : req.query.to,
subject : req.query.subject,
text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});


});

app.get('/resume', function(req, res){
  var file = root + '/public/upload-folder/Khoury_Fredrick_Resume.pdf';
  res.download(file); // Set disposition and send it.
});




 
app.env
//server
app.listen(process.env.PORT || 4200);
console.log('app live in 4200');