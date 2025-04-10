import {Request, Response, NextFunction} from 'express'
import house, { HouseController, singleHouseController } from "../controller/house";
import { singleHouseService } from "../db/house";


class HouseHandler{
    houseController:HouseController;
    constructor(houseController:HouseController){
        this.houseController = houseController;
    }
    async getAllHouses(req:Request, res:Response, next: NextFunction){
        try{

        } catch(error){
            res.status(500).json({message:"The request could not be completed"})
        }
    }
}

const singleHouseHandler = new HouseHandler(singleHouseController)
export {singleHouseHandler, HouseHandler}
export default HouseHandler;