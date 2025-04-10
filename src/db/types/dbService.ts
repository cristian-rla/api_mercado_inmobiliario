import { z } from "zod";
import House from "../../types/db/house";

interface HouseServiceInterface{
        getHouses(): Promise<z.infer<typeof House>[]>,
        getHouseById(id:number): Promise <z.infer<typeof House>>
        getHouseByRange(priceMin:number, priceMax:number):Promise<z.infer<typeof House>[]>
        getHouseByType(type:string): Promise<z.infer<typeof House>[]>
}

export {HouseServiceInterface};