import type { House } from "../types/db/house";
import type { HouseServiceInterface } from "../db/types/dbService";
import { HouseService, singleHouseService } from "../db/house";

export class HouseController{
    service:HouseServiceInterface;
    constructor(dbService:HouseService){
        this.service= dbService;
    }
    async getAllHouses():Promise<House[]>{
        return await this.service.getHouses();
    }
    async getHouseByType(type:string): Promise<House[]>{
        return await this.service.getHouseByType(type);
    }

    async getHouseByRange(lowLimit:number, highLimit:number): Promise<House[]>{
        return await this.service.getHouseByRange(lowLimit, highLimit);
    }
    
    sum(num1:number, num2:number){
        if(num1 < 0 || num2 < 0) throw new Error("numbers can't be negative");
        return num1 + num2;
    }
}

export const singleHouseController =  new HouseController(singleHouseService);
