const productRouter = require("../routes/productRouter")
const {Product,Category,Toppings} = require('../../database/models/index')

const getInfoDB = async () => {
    const dbData = await Product.findAll();
    return dbData;
  };

  const getInfoCategory = async () => {
    const dbCategory = await Category.findAll();
    return dbCategory;
  };

  const getInfoToppings = async () => {
    const dbToppings = await Toppings.findAll();
    return dbToppings;
  }


module.exports = {
    getInfoDB,
    getInfoCategory,
    getInfoToppings
}