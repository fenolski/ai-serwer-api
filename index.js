const express = require("express");
const { createImportSpecifier } = require("typescript");
const app = express();

app.listen(8888, () => {
    console.log("App started");
})

app.get('/', (req,res) => {
        console.log(req.body)
        res.send("serwer działa")
    }
)

app.post('/', (req, res) => {
        console.log(req.body)
        res.status(200).end()
    }
)

// app.post('/', (req, res) => {
//     //miejsce na kod uruchunieniowy AI pyhona
//     const { exec } = require("childprocess");

//     exec("ls -la", (err, stdout, stderr) => {
//         console.log('Error triggered')
//     }); 
//     res.send("Has sent!")
// })

