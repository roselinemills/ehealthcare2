const product = require("../models/product")

module.exports={
    async getAll(req,res){
try {
    const products = await product.findAll()
    console.log(products)
} catch (error) {

}
    },
    async saveP(req,res){
        try {
            const product = await product.create({
                product_name: Pname,
    description: info,
    category: cat,
    price: price,
    quantity_available: quantity,
    manufacturer: manufacturer
            })
            res.status(200).send("Product Information succesfully Saved")
        } catch (error) {
            res.status(500).send({
                error: "Product Information Could not be Saved",
              });


        }
    }
}