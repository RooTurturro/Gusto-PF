const request = require("supertest")


const app = require("../../../app")

it("Can send emails with valid inputs" , async ()=>{
    return request(app)
    .post("/api/mail")
    .send({
      to : "rocioolivaturturro@gmail.com" ,
      subject : "subjeect" ,
      text : "Texto random" ,
      html : "<strong>Random text</strong>",
    }).expect(201);
})

it("Error" , async ()=>{
    return request(app)
    .post("/api/mail")
    .send({
      to : "" ,
      subject : "" ,
      text : "Texto random" ,
      html : "<strong>Random text</strong>",
    }).expect(400);
})