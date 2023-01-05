const productRouter = require("../routes/productRouter")
const {Product,Category,Toppings} = require('../../database/models/index')

const getInfoDB = async () => {
    const dbData = await Product.findAll({
    
    include: {
        model: Category,
        attribute: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dbData;
  };



module.exports = {
    getInfoDB
}