import express from 'express'
import {singleHouseHandler} from '../handler/house';

const router = express.Router();

router.get("/", singleHouseHandler.getAllHouses.bind(singleHouseHandler));

export default router;