const mongoose = require('mongoose');
const productList  = require('./productList');
const Product = require('../models/productModel');

mongoose.connect("mongodb+srv://lalithkumarg20:lalith@cluster0.cci4dia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
   console.log(err.message)
})

const addProducts = async (productList) => {
    try {
        await Product.deleteMany({})
        for(let i=0; i<productList.length; i++) {
            const {productname, img, price, status, type, category} = productList[i]
            const product = new Product({productname: productname, img: img, price: price, status: status, type: type, category: category})
            await product.save()
        }
    }
    catch(err){
        console.log(err.message);
    }
}

addProducts(productList)
.then(() => {
    console.log('Products added')
    mongoose.connection.close()
})
.catch((err) => {
    console.log(err.message)
})