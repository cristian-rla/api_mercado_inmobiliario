// Si es necesario modificar el precio de la casa, si habrá cierta lógica de negocio involucrada en cómo cambiar los datos
import {z} from 'zod'

const House = z.object({
    id:z.number(),
    price:z.number(), // Precio de renta
    name:z.string(), // Asunto 
    description:z.string(), // Descripción del lugar
    address:z.string(), // Localización
    grade:z.number(), // Puntuación de los inquilinos anteriores   
    terrainSize:z.number(), // Tamaño del terreno
    constructionSize:z.number(), // Tamaño de la construcción
    duration:z.number(), // Plazos de pago
    type:z.string() // Renta o venta
})

const HouseQuery = z.object({
    "id":z.number().optional(),
    "price":z.number().optional(), // Precio de renta
    "name":z.string().optional(), // Asunto 
    "description":z.string().optional(), // Descripción del lugar
    "address":z.string().optional(), // Localización
    "grade":z.number().optional(), // Puntuación de los inquilinos anteriores   
    "terrainSize":z.number().optional(), // Tamaño del terreno
    "constructionSize":z.number().optional(), // Tamaño de la construcción
    "duration":z.number().optional(), // Plazos de pago
    "type":z.string().optional() // Renta o venta
})

export {House, HouseQuery}
export default House;