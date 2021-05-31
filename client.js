const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const def = new Schema({
    name: { type: String, required: true  },
    adress: { type: String, required: true },
    sex: { type: String, required: true },
    age: { type: Number, required: true }
});
const Kat=mongoose.model('Kat', def);
module.exports= Kat;