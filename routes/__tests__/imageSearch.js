const request = require("supertest");
const express = require("express");
const imageSearchRoutes = require("../imageSearch");

const app = new express();
app.use(express.json()); // needed to test POST requests
app.use("/", imageSearchRoutes);

describe("ImageSearch Routes", () => {

  //----- Test 1 -----
  it("responds to POST /api/imageSearch", async () => {
    const res = await request(app).post("/api/imageSearch").send({
      searchInput: "dogs", 
      page: 10
    });
    
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("json"));
    expect(res.body.searchResults).toBeDefined();
    expect(Array.isArray(res.body.searchResults)).toBe(true);
  });

  //----- Test 2 -----
  it("responds to GET /api/imageSearch", async () => {
    const res = await request(app).get("/api/imageSearch");
    
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toEqual(expect.stringContaining("json"));
    expect(res.body.recentSearches).toBeDefined();
    expect(Array.isArray(res.body.recentSearches)).toBe(true);
  });
});