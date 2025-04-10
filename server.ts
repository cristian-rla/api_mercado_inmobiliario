import express from 'express'
import houseRoutes from "./src/routes/house"

const app = express();

app.use(express.json());

app.use("/api/house", houseRoutes);

app.listen(3000,() => console.log("Servidor corriendo en el puerto 3000"))
