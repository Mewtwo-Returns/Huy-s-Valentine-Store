const request = require("supertest");
const path = require("path");
const fs = require("fs");
const { assert } = require("console");
const server = "http://localhost:3000";





//root server testing
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
      })
    })
    it('incorrect backend route sends 404 error', () => {
      return request(server)
      .get('/random')
      .expect(404)
    })
  })
  describe('api router', () => {
    describe('get signup route', () => {
      describe('given the user does not exist', () => {
        it('should return a 200', async() => {
          const response = await request(server).post('/api/signup').send({
            first_name: "firstname",
            last_name: "lastname",
            email: "testemail@email.com",
            user_password: "user_password"
          })
          expect(response.status).toBe(200)
        })
      })
      describe('given the user already exist', () => {
        it('should return a 500', async() => {
          const response = await request(server).post('/api/signup').send({
            first_name: "firstname",
            last_name: "lastname",
            email: "testemail@email.com",
            user_password: "user_password"
          })
          expect(response.status).toBe(500)
        })
      })
    })
  })
})
