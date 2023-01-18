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
  const { to , name } = req.body ; 
  
 /* const detail = {
    name : compras.name,
    total: compras.total,
    products : compras.products.map((el) => {
      return (
        el.map((el)=> {
          return (el)
        })
      )
    })
  }*/
     
   const msg = {
     to,
     from: `rocioolivaturturro@gmail.com`,
     subject: "Su pedido esta siendo preparado",
     text:"Gracias por su compra",
     html: `<h1>Preparando pedido</h1><strong>Hola ${name} recibimos tu compra ! <br></br> Pediste  <br></br> </strong> <br></br><strong> Muchas Gracias !!! :D  <br></br> </strong><strong>Gusto</strong>`,
   }
   try{
     await sgMail.send(msg)
   }
   catch(err){
     console.log(err)
     return res.status(400).send(err)
   }
   res.status(201).send({success : true})
 });

 sendGrid.post("/cancel", async (req,res)=>{
  const { to , name , motivo} = req.body ; 
 
   const msg = {
     to,
     from: `rocioolivaturturro@gmail.com`,
     subject: "Su pedido a sido cancelado :((",
     text:"Pedido cancelado",
     html: `<h1>Su pedido fue cancelado :(</h1><strong>Lamentamos este incoveniente, los motivos de cancelacion son : ${motivo}</strong>`,
    
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
     from: `rocioolivaturturro@gmail.com`,
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