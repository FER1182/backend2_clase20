const express = require("express")
const productosRoutes = require("./routes/routesProductos");
const carritoRoutes = require("./routes/routesCarrito");

const app = express()
const port = process.env.PORT || 8080

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .



app.set("view engine" ,"ejs")
app.set("views","./views")

app.use("/",productosRoutes);
app.use("/productos",productosRoutes);
app.use("/cart",carritoRoutes);


app.listen(port,()=>{
    console.log("server ok")
})