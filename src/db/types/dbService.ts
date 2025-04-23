import type { House } from "../../types/db/house";

export interface HouseServiceInterface{
        getHouses(): Promise<House[]>,
        getHouseById(id:number): Promise <House>,
        getHouseByRange(priceMin:number, priceMax:number):Promise<House[]>,
        getHouseByType(type:string): Promise<House[]>
}

