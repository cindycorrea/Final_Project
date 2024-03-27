const { getFantasy } = require("./fantasy");
// const request = require("supertest");

describe('tests fantasy functions', () => {
    it('should return an error code', async () => {
        const request = {
            params: { id: '65e'}
        };
        const response = {
            setHeader: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getFantasy(request, response);

        expect(response.status).toHaveBeenCalledWith(500);

    });
})