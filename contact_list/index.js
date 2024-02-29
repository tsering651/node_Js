const exp = require('constants');
const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose')
const app=express();

//telling the express we are using EJS as template engine
app.set('view engine','ejs');
//setting the path for my views
app.set('views',path.join(__dirname,'views'));

//middleaware for parsing
app.use(express.urlencoded())

//middleware to access static files
app.use(express.static('assets'));

//custom middle ware 
//middle ware will have access to req and res
//next will take us to next middleware or if not present then it would take us to controller
// app.use(function(req,res,next){
//     console.log("Middleware1 called");
//     next();
// })

// //middleware2 
// app.use(function(req,res,next){
//     console.log("Middleware2 called");
//     next();
// })


app.get('/home',function(req,res){
   // console.log(__dirname);
   // res.send('Cool Its working !!')
   return res.render('home',{title:'My contact List'});
})
var contactList=[
    {
        name:"Tsering Wangchu",
        number:"57827789"
    },
    {
        name:"Tsering Wangchu",
        number:"456789"
    },
    {
        name:"Tsering Wangchu",
        number:"9000789"
    }, 
     {
        name:"Tsering Wangchu",
        number:"58529999"
    }

];

app.get('/',function(req,res){
    return res.render('practice',{
        title:"This is playGame",
        contact_list:contactList
    })
})

app.post('/add-contact',function(req,res){
   //  return res.redirect('/practice');
//    console.log(req.body);
//    console.log(req.body.name)
//    console.log(req.body.number)
    //  contactList.push(
    //     {
    //         name:req.body.name,
    //         phone_Number:req.body.number
    //     }
    //  )
    contactList.push(req.body);
     return res.redirect('/');
})

app.get('/delete-contact/:number',function(req,res){
    console.log(req.params);
    let number=req.params.number;

    let findIndex=contactList.findIndex(contact=> contact.number== number);
    if(findIndex !=-1){
        contactList.splice(findIndex,1);
    }
    return res.redirect('/');
})


app.listen(port,function(err){
    if(err){
        console.log('Error occured');
       

    }
    console.log('Server is running at port: ',port);
});