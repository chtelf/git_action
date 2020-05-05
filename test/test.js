const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello CAPGEMINI via Github blabla", (done) => {
    request(app).get("/").expect("Hello CAPGEMINI via Github Actions", done);
  })
});
