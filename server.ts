import express from 'express'
import houseRoutes from "./src/routes/house"

const app = express();

app.use(express.json());

app.use("/api/house", houseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor corriendo en el puerto "+PORT));
