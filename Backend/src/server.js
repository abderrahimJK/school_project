const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const {sequelize , Cour} = require("../models");

const app= express();
app.use(cors());
app.use(express.json())
app.use(fileUpload());

app.post('/cours', async(req, res)=>{
     const { TitreCour, filiere, pdf } = req.body
     console.log(req.body)
     try{
        const cours =  await Cour.create({ TitreCour, filiere, pdf  })
        return res.json(cours);
     }catch(err){
         console.log(err);
         return res.status(500).json(err)
     }
})
// Upload Endpoint
app.post('/upload',  async(req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const TitreCour = req.body.TitreCour
    const filiere = req.body.filiere
    const file = req.files.file;
    try{
        const cours =  await Cour.create({ TitreCour, filiere, file  })
        
        file.mv(`${__dirname}/pdfr/public/Uploads/${file.name}`, err => {
            if (err) {
              console.error(err);
              return res.status(500).send(err);
            }
        
            res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
          });
          return res.json(cours);
     }catch(err){
         console.log(err);
         return res.status(500).json(err)
     }

    
  });

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