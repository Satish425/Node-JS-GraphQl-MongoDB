const Product = require("../models/Product");

const resolvers = {
    Query : {
        products : async ()=> await Product.find({}),
        product : async (_,{id})=> await Product.findById(id)
    },
    Mutation : {
        createProduct : async (_,{title,category,price,inStock})=>{
            const newlyCreatedProduct = Product.create({
                title,
                category,
                price,
                inStock
            })
            return newlyCreatedProduct;
        },
        deleteProduct : async (_,{id})=>{
            const deletedProduct = await Product.findByIdAndDelete(id);
            return !!deletedProduct;
        },
        updateProduct : async (_,{id,...updates})=>{
            return await Product.findByIdAndUpdate(id,updates,{new:true});
        }
    }
}
module.exports = resolvers;