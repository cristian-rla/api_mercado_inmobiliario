import express from 'express'
import { singleHouseController, HouseController } from '../controller/house';
import {singleHouseHandler, HouseHandler} from '../handler/house';

const router = express.Router();

router.get("/", singleHouseHandler.getAllHouses);

export default router