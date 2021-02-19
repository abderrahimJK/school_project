const express = require('express');
const cors = require('cors');
const {sequelize , cours} = require("../models");



const app= express();
app.use(cors());
app.use(express.json())

app.post('/cours', async(req, res)=>{
     const { numcour, nomfiliere, nomcour, urlcour } = req.body
     try{
        const cour =  await cours.create({ numcour, nomfiliere, nomcour, urlcour })
        return res.json(cour);
     }catch(err){
         console.log(err);
         return res.status(500).json(err)
     }
})

app.get('/cours/:nomfiliere', async (req, res) =>{
    const nomfiliere = req.params.nomfiliere
    try{
        const cour = await cours.findAll({
            where:{nomfiliere}
        })
        return res.json(cour);
    }catch(err){
        console.log(err);
        return res.status(500).json({error : "Something went wrong....! "})
    }
})

app.listen( {port: 5000}, async () =>{
    console.log("Server up on => http://localhost:5000");
    await sequelize.authenticate();
    console.log("DataBase synced");

})
