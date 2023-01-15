const { Router } = require("express");
const sendGrid = Router();
const sgMail = require("../../services/sendGrid")

sendGrid.post("/", async (req,res)=>{
 const { to , subject , text , html } = req.body ; 

  const msg = {
    to,
    from: `emi-re11@hotmail.com`,
    subject,
    text,
    html,
   
  }
  try{
    await sgMail.send(msg)
  }
  catch(err){
    return res.status(err.code).send(err.message)
  }
  res.status(201).send({success : true})
});

sendGrid.post("/checkout", async (req,res)=>{

  /*const detail = await axios.get("https://localhost/3001/purchase")
  const sendDetail = {
    compraId: detail.id,
    productName: detail.products.name,
    productPrice: detail.products.price,
    product2: detail.specification,
    product3: detail.total
  }*/
  const { to , name , compras } = req.body ; 
  
  const detail = {
    name : compras.name,
    total: compras.total,
    products : compras.products.map((el) => {
      return (
        el.map((el)=> {
          return (el)
        })
      )
    })
  }
     
  console.log(compras)
   const msg = {
     to,
     from: `emi-re11@hotmail.com`,
     subject: "Su pedido esta siendo preparado",
     text:"Gracias por su compra",
     html: `<h1>Preparando pedido</h1><strong>Hola ${name} recibimos tu compra ! <br></br> Pediste ${detail.products} <br></br> El total es : ${detail.total} <br></br> </strong> <br></br><strong> Muchas Gracias !!! :D  <br></br> </strong><strong>Gusto</strong>`,
   }
   try{
     await sgMail.send(msg)
   }
   catch(err){
     return res.status(400).send(err)
   }
   res.status(201).send({success : true})
 });

 sendGrid.post("/login", async (req,res)=>{
  const { to , name } = req.body ; 
 
   const msg = {
     to,
     from: `emi-re11@hotmail.com`,
     subject: "Su cuenta a sido creada :)",
     text:"Cuenta creada con exito ",
     html: `<h1>Cuenta registrada con exito</h1><strong>Su cuenta a sido creada con exito , Esperamos pronto su pedido</strong>`,
    
   }
   try{
     await sgMail.send(msg)
   }
   catch(err){
     return res.status(err.code).send(err.message)
   }
   res.status(201).send({success : true})
 });

 sendGrid.post("/updateAccount", async (req,res)=>{
  const { to , name } = req.body ; 
 
   const msg = {
     to,
     from: `emi-re11@hotmail.com`,
     subject: "Su cuenta a sido modificada:)",
     text:"Cuenta su cuenta a sido modificada",
     html: `<h1>Su cuenta se modifico con exito ! </h1><strong>Hola ${name}.Su cuenta a sido modificada con exito</strong>`,
    
   }
   try{
     await sgMail.send(msg)
   }
   catch(err){
     return res.status(err.code).send(err.message)
   }
   res.status(201).send({success : true})
 });
 
module.exports = sendGrid;