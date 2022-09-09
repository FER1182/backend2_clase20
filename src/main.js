import express from "express"
import routesProductos from "./routes/routesProductos.js";
import carritoRoutes from "./routes/routesCarrito.js";

const app = express()
const port = process.env.PORT || 8080

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .



app.set("view engine" ,"ejs")
app.set("views","./views")

app.use("/",routesProductos);
app.use("/productos",routesProductos);
app.use("/cart",carritoRoutes);


app.listen(port,()=>{
    console.log("server ok")
})