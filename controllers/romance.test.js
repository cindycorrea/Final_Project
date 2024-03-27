const { oneRomance } = require("./romance");
// const request = require("supertest");

describe('tests romance functions', () => {
    it('should return an error code', async () => {
        const request = {
            params: { id: '65e'}
        };
        const response = {
            setHeader: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await oneRomance(request, response);

        expect(response.status).toHaveBeenCalledWith(500);

    });
})