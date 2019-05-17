// this file is testing our server

const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it("Should run tests", () => {
    expect(true).toBeTruthy();
  });
  it("Should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  it("GET /", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("text/html");
  });
});
describe("GET /games", () => {
  // using the squad
  it("Should return 200 OK using the squad", async () => {
    const res = await request(server).get("/games");
    expect(res.status).toBe(200);
  });
  it("Should return Text/HTML", async () => {
    const res = await request(server).get("/games");
    expect(res.type).toBe("application/json");
  });
});

describe("POST /games", () => {
  // using the squad
  it("Should return 422 using the squad", async () => {
    const res = await request(server).post("/games");
    expect(res.status).toBe(422);
  });
  it("Should return JSON", async () => {
    const res = await request(server).post("/games");
    expect(res.type).toBe("application/json");
  });
});

//'rem' 'jestit' shortcut
