"use strict";
const { Router } = require("express");
const sendGrid = Router();
const sgMail = require("../../services/sendGrid");

sendGrid.post("/", async (req, res) => {
  const { to, subject, text, html } = req.body;

  const msg = {
    to,
    from: `emi-re11@hotmail.com`,
    subject,
    text,
    html,
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    return res.status(err.code).send(err.message);
  }
  res.status(201).send({ success: true });
});

sendGrid.post("/checkout", async (req, res) => {
  const { to, name, detail } = req.body;

  const detalle = {
    products : detail.products ,
    price : detail.price ,
    address : detail.adress ,
    quantity : detail.quantity
  }
   
     
   const msg = {
     to,
     from: `rocioolivaturturro@gmail.com`,
     subject: "Su pedido esta siendo preparado",
     text:"Gracias por su compra",
     html: `<h1>Preparando pedido</h1><strong>Hola ${name} recibimos tu compra ! <br></br> Pediste: ${detalle.products} x ${detalle.quantity} <br></br>

     <br></br> El total de su compra es : ${detail.price} <br></br>
      </strong> <br></br><strong> Muchas Gracias !!! :D  <br></br> </strong><strong>Gusto</strong>`,
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
  res.status(201).send({ success: true });
});

sendGrid.post("/cancel", async (req, res) => {
  const { to , name,  motivo } = req.body;
  const msg = {
    to,
    from: `rocioolivaturturro@gmail.com`,
    subject: "Su pedido a sido cancelado :((",
    text: "Pedido cancelado",
    html: `<h1>Su pedido fue cancelado :(</h1><strong>Lamentamos este incoveniente ${name}. Los motivos de cancelacion son ${motivo} </strong>`,
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    return res.status(404).send(err.message);
  }
  res.status(201).send({ success: true });
});

sendGrid.post("/promociones", async (req, res) => {
  const { to, fecha, texto1, texto2 , texto3 } = req.body;

  const msg = {
    to,
    from: `rocioolivaturturro@gmail.com`,
    subject: "CONOCE NUESTRAS PROMOS SEMANALES:)",
    text: "Promociones Gusto",
    html: `<h1>Hola ! Conoce nuestras promociones semanales y descuentos ! </h1>
    <strong>Tenemos las siguientes promociones validas hasta el dia:${fecha}</strong><br>
    <strong>PROMOCION 1${texto1}<strong/><br>
    <strong>PROMOCION 2${texto2}<strong/><br>
    <strong>PROMOCION 3${texto3}<strong/><br>   
    `
  };
  try {
    await sgMail.send(msg);
  } catch (err) {
    return res.status(err.code).send(err.message);
  }
  res.status(201).send({ success: true });
});

module.exports = sendGrid;
