const { Router } = require("express");
const sendGrid = Router();
const sgMail = require("../../services/sendGrid")

sendGrid.post("/", async (req,res)=>{
 const { to , subject , text , html , sandboxMode = false  } = req.body ; 

  const msg = {
    to,
    from: `emilianore997@gmail.com`,
    subject,
    text,
    html,
    mail_settings : {
      sandbox_mode: {
        enable: sandboxMode
      }
    }
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