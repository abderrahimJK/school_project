const express = require('express');
const cors = require('cors');
const {sequelize , Cour} = require("../models");

const app= express();
app.use(cors());
app.use(express.json())

app.post('/cours', async(req, res)=>{
     const { TitreCour, filiere, pdf } = req.body
     try{
        const cours =  await Cour.create({ TitreCour, filiere, pdf  })
        return res.json(cours);
     }catch(err){
         console.log(err);
         return res.status(500).json(err)
     }
})

app.get('/cours/:nomfiliere', async (req, res) =>{
    const filiere = req.params.nomfiliere
    try{
        const cours = await Cour.findAll({
            where:{filiere}
        })
        return res.json(cours);
    }catch(err){
        console.log(err);
        return res.status(500).json({error : "Something went wrong....! "})
    }
})
app.get('/cours/:searchTerm', async (req, res) =>{
    const searchQuery = req.params.searchTerm
    try{
        const cours = await Cour.findAll({
            where:{TitreCour: { like: '%' + searchQuery + '%' }}
        })
        //console.log(cours);
        return res.json(cours);
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