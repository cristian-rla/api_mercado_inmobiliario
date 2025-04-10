import {HouseService, singleHouseService} from "../db/house";
import House from "../types/db/house";
import { z } from "zod";
import { HouseServiceInterface } from "../db/types/dbService";

class HouseController{
    service:HouseServiceInterface;
    constructor(dbService:HouseService){
        this.service= dbService;
    }

    async getHouseByType(type:string): Promise<z.infer<typeof House>[]>{
        return await this.service.getHouseByType(type);
    }

    async getHouseByRange(lowLimit:number, highLimit:number){
        
    }
    
    sum(num1:number, num2:number){
        if(num1 < 0 || num2 < 0) throw new Error("numbers can't be negative");

        return num1 + num2;
        
    }
}

const singleHouseController= new HouseController(singleHouseService);
export default new HouseController(singleHouseService);
export {HouseController, singleHouseController};