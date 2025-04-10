import { HouseController } from "../controller/house";

const mockService ={
    getHouses:jest.fn(),
    getHouseById:jest.fn(),
    getHouseByType:jest.fn(),
    getHouseByRange:jest.fn(),
    getHouseByQuery:jest.fn()
}


describe('House Controller', () =>{
    let mockController:HouseController;
    beforeEach(() =>{
        mockController = new HouseController(mockService);
    })

    test('should return the sum when the numbers are positive', () =>{
        // given
        const num1 = 10;
        const num2 = 10;

        // when
        const result = mockController.sum(num1,num2);

        // then
        expect(result).toBe(20)
    })
    test('should throw an error when one of the numbers is negative', async () =>{
        // given
        const num1 = 10;
        const num2 = -5;

        // when

        // then
        expect(() => {mockController.sum(num1, num2)}).toThrow("numbers can't be negative");
    })
})