const express = require("express");

const  Product= require("../controller/product");


const router = express.Router();



router.get("/allproduct", Product.getAll);
router.post("/saved", Product.saveP);
router.get("/getone/:id",Product.getOne)
router.put("/update/:id",Product.getUpdate)
router.delete("/delete/:id",Product.getDelete)
// router.get("/", orders.getOrder);
// router.get("/getall", orders.getAll);
// router.get("/getall/active", orders.active);
// router.get("/history/agent", orders.historyA);
// router.put("/getall/update", orders.updated);
// router.get("/track/:id", orders.track);
// router.put("/", orders.cancelOrder);
// router.get("/agent", orders.agentShow);
// router.put("/agent", orders.status);
// router.post("/deposit",deposit.deposit)


module.exports = router;
