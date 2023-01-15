const { Router } = require("express");
const userRouter = Router();
const { requiresAuth } = require("express-openid-connect");
const { User } = require('../../db')
//------Ruta de la documentacion------------
// userRouter.put("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });  

userRouter.get("/", async (req, res) => {
  
    const allUsers = await User.findAll(); 

    try {
      
        const user = allUsers
        return res.status(200).send(user)

      }

    catch (error) {

      res.status(400).send(error)
    }
});



userRouter.post("/", async (req, res)=>{
  try {

      const {name, email} = req.body;
      const findUser = await User.findOne({ where: { email: email } });

    if (findUser) {

      res.status(201).send('Usuario ya existe');
      
    } else {

      const newUser = await User.findOrCreate({where:{name, email}})
      
      res.status(201).send(newUser);

    }
      
      

  } catch (error) {
      console.log(error)
      res.status(400).send(error);
  }
});





 userRouter.put("/", async (req, res) => {

          const {name, phone, email, address, isAdmin} = req.body;

          const findUser = await User.findOne({ where: { email: email } });

              try {

                if(name && phone && email && address){

                await findUser.update({name,phone,email,address,isAdmin});
                res.status(200).send(findUser);

                  } else {
                  res.status(400).send("Faltaron datos para modificar el Usuario");
                }

              } catch (error) {
                console.log("entre al error del put", error);
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