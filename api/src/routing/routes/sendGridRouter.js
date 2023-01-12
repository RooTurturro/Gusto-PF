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

module.exports = sendGrid;