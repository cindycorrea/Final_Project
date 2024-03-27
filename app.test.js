const { app } = require("./app");
const request = require("supertest");

describe("Test Route", () => {
  test("GET /route - success", async () => {
    const res = await request(app).get("/routes/fantasy");
    expect(res.statusCode).toBeGreaterThan(99);
    expect(res.statusCode).toBeLessThan(600);
  });
});
