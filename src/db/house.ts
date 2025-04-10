import {House, HouseQuery} from "../types/db/house";
import {z} from 'zod'

const HOUSES = [
    {
      id:1,
      price: 14500,
      name: "Casa de los Encinos",
      description: "Una acogedora casa con jardín amplio y árboles frutales. Ideal para familias.",
      address: "Calle Robles 123, Colonia Jardines del Sur, Culiacán, Sinaloa",
      grade: 4.7,
      terrainSize: 350, // en m²
      constructionSize: 180, // en m²
      duration: 12, // meses
      type: "renta"
    },
    {
      id:2,
      price: 3200000,
      name: "Residencial Monteverde",
      description: "Moderna residencia en privada con seguridad, alberca y acabados de lujo.",
      address: "Privada Monteverde #45, Desarrollo Urbano Tres Ríos, Culiacán, Sinaloa",
      grade: 4.9,
      terrainSize: 500,
      constructionSize: 300,
      duration: 0, // porque es venta
      type: "venta"
    },
    {
        id:3,
        price: 9800,
      name: "Loft Centro Histórico",
      description: "Loft minimalista a unas cuadras de la catedral, ideal para estudiantes o solteros.",
      address: "Av. Álvaro Obregón 101, Centro, Culiacán",
      grade: 4.3,
      terrainSize: 100,
      constructionSize: 95,
      duration: 6,
      type: "renta"
    },
    {
        id:4,
        price: 2500000,
      name: "Casa Campestre El Palmar",
      description: "Espaciosa casa con área de asador y árboles frondosos. Perfecta para descansar.",
      address: "Camino a Imala Km 10, El Palmar, Culiacán",
      grade: 4.5,
      terrainSize: 1000,
      constructionSize: 200,
      duration: 0,
      type: "venta"
    }
  ];
  
class HouseService{
    async getHouses(): Promise<z.infer<typeof House>[]>{
        return HOUSES;
    }
    async getHouseById(id:number): Promise <z.infer<typeof House>>{
        return HOUSES[id];
    }
    async getHouseByRange(priceMin:number, priceMax:number):Promise<z.infer<typeof House>[]>{
        return HOUSES.filter(house => house.price > priceMin && house.price < priceMax)
    }
    async getHouseByType(type:string){
        return HOUSES.filter(house => house.type == type);
    }
    async getHouseByQuery(query:z.infer<typeof HouseQuery>){
        const filteredHouses = HOUSES
        for (let condition in query){
            let key = condition as keyof z.infer<typeof HouseQuery>;
            filteredHouses.filter(house => condition == house[key])
        } 
        return filteredHouses;
    }
}

const singleHouseService = new HouseService();
export {HouseService, singleHouseService}
export default HouseService;