
import {singleHouseController, HouseController} from "../controller/house";
import {Request, Response, NextFunction} from 'express'


export default class HouseHandler{
    houseController:HouseController;
    constructor(houseController:HouseController){
        this.houseController = houseController;
    }
    async getAllHouses(req:Request, res:Response, next: NextFunction){
        try{
            const houses = await this.houseController.getAllHouses();
            console.log(houses);
            res.status(200).json(houses);
        } catch(error){
            if (error instanceof Error)
            res.status(500).json({message:error.message});
        }
    }
}

export const singleHouseHandler = new HouseHandler(singleHouseController);
export {HouseHandler}