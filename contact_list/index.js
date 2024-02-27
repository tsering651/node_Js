const express=require('express');
const path=require('path');
const port=8000;


const app=express();

//telling the express we are using EJS as template engine
app.set('view engine','ejs');
//setting the path for my views
app.set('views',path.join(__dirname,'views'));


app.get('/',function(req,res){
   // console.log(__dirname);
   // res.send('Cool Its working !!')
   return res.render('home');
})


app.listen(port,function(err){
    if(err){
        console.log('Error occured');
       

    }
    console.log('Server is running at port: ',port);
});