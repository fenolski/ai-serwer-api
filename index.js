const express = require("express");
const { createImportSpecifier } = require("typescript");
const cors = require("cors")
const {exec} = require("child_process")
const app = express();

app.use(cors())

app.listen(8888, () => {
    console.log("App started");
})

app.get('/', (req,res) => {
        res.send("App get")
        exec("ls -la", () => {
            console.log("Exec triggered")
            })        
    }
)

app.post('/', (req, res) => {
        res.send("App post")
        exec("ls -la", () => {
            console.log("Exec triggered")
            })
        res.status(200).end()
    }
)