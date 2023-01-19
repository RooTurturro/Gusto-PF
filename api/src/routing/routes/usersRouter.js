const { Router } = require("express");
const userRouter = Router();
const { requiresAuth } = require("express-openid-connect");
const { User } = require('../../db')
const bodyParser = require('body-parser');
//------Ruta de la documentacion------------
// userRouter.put("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });  

userRouter.get("/", async (req, res) => {
  const {email} = req.body;
  
  const allUsers = await User.findAll();

  //------PETICION CON EMAIL
  if(email){
    try {
      const findUser = await User.findOne({ where: { email: email } });

      if (!findUser) return res.status(200).send('Email no encontrado')

      return res.status(200).send(findUser)
      
    } catch (error) {

      res.status(400).send(error)

    }

  }
  //------Si no tiene email que devuelva todos los users--------
  if(!email){

    try {
      const allUsers = await User.findAll();
      return res.status(200).send(allUsers)

    } catch (error) {
  
      res.status(400).send(error)
    }

  }
  

});

userRouter.get("/email", async (req, res)=>{

  const email = req.query.email;

  console.log('que llega por query ' + email )
  
 

    try {
      const findUser = await User.findByPk(email);

      console.log('usuario encontrado ' + findUser)

      if (!findUser) return res.status(200).send('Email no encontrado')

      return res.status(200).send(findUser)
      
    } catch (error) {

      
      console.log(error)

      res.status(400).send(error)

    }

  })



userRouter.post("/", bodyParser.json(), async (req, res) => {

  console.log(req.body)

  const { name, email } = req.body;

  if(!email){
    try {
      res.status(201).send('No email');
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  }
  if(name&&email){

    try {
            const findUser = await User.findOne({ where: { email: email } });
        
            if (findUser) {
        
              res.status(201).send('Usuario ya existe');
        
            } else {
        
              const newUser = await User.findOrCreate({ where: { name, email } })
        
              res.status(201).send(newUser);
        
            }
  
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  }
  
});





userRouter.put("/", async (req, res) => {

  const { name, phone, email, address, isAdmin, state } = req.body;

      if(!email){

        try {

          res.status(201).send('No email');

        } catch (error) {

          console.log(error)

          res.status(400).send(error);

        }
      }
      
  if(name&&phone&&email&&address){
            const findUser = await User.findOne({ where: { email: email } });

            try {

              if (name && phone && email && address) {

                await findUser.update({ name, phone, email, address, isAdmin, state });
                res.status(200).send(findUser);

              } else {
                res.status(400).send("Faltaron datos para modificar el Usuario");
              }

            } catch (error) {
              console.log("entre al error del put", error);
            }

  }
  
})







//-------------Rutas que Requieren autenticacion------------
userRouter.get("/profile", requiresAuth(), async (req, res) => {
  const userName = await JSON.stringify(req.oidc.user);
  console.log(JSON.stringify(req.oidc.user));
  res.status(200).send(userName);
});


userRouter.get("/admins", requiresAuth(), async (req, res) => {
  /* res.send(JSON.stringify(req.oidc.user, null, 2)); */
  const getAdmin = await User.findAll({
    where: {
      isAdmin: true,
    },
  });
  getAdmin ? res.status(200).json(getAdmin) : res.status(404).send("Not Found");
});



module.exports = userRouter;