import express from "express"
import cors from "cors"
import db from "./database/db.js"

import insumosRoutes from "./routes/routes.js"



const app = express()

app.use(cors())
app.use(express.json())
app.use('/insumos', insumosRoutes)


app.get('/',(req,res) =>{
    res.send('hola mundo')
})

app.listen(8000,()=>{
    console.log("server corriendo en http://localhost:8000/")
})