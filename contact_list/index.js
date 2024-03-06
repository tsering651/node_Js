import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Import fileURLToPath function
import Contact from './Models/contact.js'
 

import mongoose from 'mongoose';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the DB");
}).catch((err)=>{
    console.log("Error",err);
})

const __filename = fileURLToPath(import.meta.url); // Get filename from import.meta.url
const __dirname = path.dirname(__filename); // Get directory name from filename

const app = express();
app.use(cors());
const port = 8000;

// telling the express we are using EJS as template engine
app.set('view engine', 'ejs');
// setting the path for my views
app.set('views', path.join(__dirname, 'views'));

// middleaware for parsing
app.use(express.urlencoded({ extended: true }));

// middleware to access static files
app.use(express.static('assets'));

// routes

app.get('/home', (req, res) => {
    return res.render('home', { title: 'My contact List' });
});

// var contactList = [
//     {
//         name: "Tsering Wangchu",
//         number: "57827789"
//     },
//     {
//         name: "Tsering Wangchu",
//         number: "456789"
//     },
//     {
//         name: "Tsering Wangchu",
//         number: "9000789"
//     },
//     {
//         name: "Tsering Wangchu",
//         number: "58529999"
//     }
// ];

app.get('/', async (req, res) => {

    //  Contact.find({},function(error,contactList){
    //     if(error){
    //         console.log("Error in fetching data");
    //         return;
    //     }
    //     return res.render('practice', {
    //         title: "This is playGame",
    //         contact_list: contactList
    //     });

    //  })
    try {
        const contactList= await Contact.find({}).exec();
        return res.render('practice',{
            title:"This is playgame",
            contact_list:contactList
        });
    } catch (error) {
        console.log("Error in fetching data:", error);
        return res.status(500).send("Error fetching data");
    }
    
});

app.post('/add-contact', async (req, res) => {
    // contactList.push(req.body);
    try {
        const newContact=await Contact.create(
            {
                name:req.body.name,
                number:req.body.number
            }
        );
        console.log("New contact created:", newContact);
        return res.redirect('/');
        
    } catch (error) {
        console.log("Contact cannot be created:", err);
        return res.redirect('/');
    }
    
});

app.get('/delete-contact/:_id', async (req, res) => {
    //getting the id from the url params
    let id = req.params._id;
    console.log(id);
    //finding the user with the above id in the database
     try {
        await Contact.findByIdAndDelete(id);
        return res.redirect('/');
     } catch (error) {
        console.log("Error while delteing",error);
        return res.status(500).send("Unable to delete");
     }
});

app.listen(port, (err) => {
    if (err) {
        console.log('Error occurred');
    }
    console.log('Server is running at port: ', port);
});
