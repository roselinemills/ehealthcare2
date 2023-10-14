const {Product} = require("../models")

module.exports={
    async getAll(req,res){
try {

    const products = await Product.findAll()

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
    },
    async getOne(req,res){
        try {
            const item = await Product.findOne({where:{id:req.params.id}})
            res.send({'item':item})

        } catch (error) {
console.log(error)
        }
    },
    async getUpdate(req,res){
        try {
            await Product.update(req.body,{where:{id:req.params.id}})

            res.send("Update was Successful")
        } catch (error) {
res.send("Update was Unsucessful")


        }
    },
    async getDelete(req,res){
        try {
            await Product.destroy({where:{id:req.params.id}})
            res.send("Deletion was succesful")
        } catch (error) {
res.send("Deletion was unsuccessful")
console.log(error)
        }
    }
}