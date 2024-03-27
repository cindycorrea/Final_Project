const { getOneMystery } = require("./mystery");
// const request = require("supertest");

describe('tests mystery functions', () => {
    it('should return an error code', async () => {
        const request = {
            params: { id: '65e'}
        };
        const response = {
            setHeader: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getOneMystery(request, response);

        expect(response.status).toHaveBeenCalledWith(500);

    });
})