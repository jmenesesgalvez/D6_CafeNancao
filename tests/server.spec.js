const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  test("GET /cafes debería devolver status 200 y un array con al menos 1 objeto", async () => {
    const response = await request(server).get("/cafes");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("DELETE /cafes/:id debería devolver 404 si el id no existe", async () => {
    const cafeId = 999; 
    const response = await request(server).delete(`/cafes/${cafeId}`).set("Authorization", "Bearer token");
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("No se encontró ningún cafe con ese id");
  });

  test("POST /cafes debería agregar un nuevo café y devolver status 201", async () => {
    const nuevoCafe = { id: 3, name: "Café Mocha" };
    const response = await request(server).post("/cafes").send(nuevoCafe);
    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(nuevoCafe);
  });

  test("PUT /cafes/:id debería devolver 400 si los IDs no coinciden", async () => {
    const cafeId = 1; 
    const payload = { id: 2, name: "Café Latte" }; 
    const response = await request(server).put(`/cafes/${cafeId}`).send(payload);
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("El id del parámetro no coincide con el id del café recibido");
  });
});
});


