const mongoose=require('mongoose');
const Kat=require('./client.js');
const express= require('express');
const app=express();
const po='mongodb+srv://saikat0109:saikat@cluster0.kvbty.mongodb.net/sai?retryWrites=true&w=majority';
mongoose.connect(po, {useNewUrlParser: true, useUnifiedTopology: true})
.then((data)=>{
console.log('connected to database');
})
.catch((err)=>{
    console.log(err);
})

app.listen(4000);
app.get('/ris', (req,res)=>{
    const kat= new Kat(
        {name:'rishika', address:'hisar',sex:'m',age:20}
);
res.send(kat); 
 kat.save();
    })
   
       