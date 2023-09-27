const {Product} = require("../models")

module.exports={
    async getAll(req,res){
try {
    console.log(req.body)
    const products = await Product.findAll()
    console.log(products)
    res.status(200).send({items:products})
} catch (error) {
    res.status(500).send({
        error: "Server Unable to  Fetch Data",
      });
}
    },
    async saveP(req,res){
        try {
            const{ product_name,
            description,
            category,
            price,
            quantity_available,
            manufacturer,
            image}=  req.body
            const products = await Product.create({
                product_name: product_name,
    description: description,
    category: category,
    price: price,
    quantity_available: quantity_available,
    manufacturer: manufacturer,
    image:image
            })
            res.status(200).send("Product Information succesfully Saved")
        } catch (error) {
            res.status(500).send({
                error: "Product Information Could not be Saved",
              });
              console.log(error)


        }
    }
}