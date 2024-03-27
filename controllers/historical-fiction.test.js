const { oneHF } = require("./historical-fiction");
// const request = require("supertest");

describe('tests HF functions', () => {
    it('should return an error code', async () => {
        const req = {
            params: { id: '65e'}
        };
        const res = {
            setHeader: jest.fn(),
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await oneHF(req, res);

        expect(res.status).toHaveBeenCalledWith(500);

    });
})