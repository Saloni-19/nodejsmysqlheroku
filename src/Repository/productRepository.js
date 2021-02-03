const dbConnection = require('../connections/dbConnection');
const dbQueries = require('../queries/dbQueries');
const queries = require('../queries/dbQueries')

module.exports = class ProductRepository{
    async saveProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let savedProduct = await con.query(dbQueries.INSERT_PRODUCTS,
            [product.productid,product.productname,product.price,product.description])
            await con.query('COMMIT')
            product.productId = savedProduct.productId;
            return product;

        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }

    async updateProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let savedProduct = await con.query(dbQueries.UPDATE_PRODUCTS,
            [product.price,product.productid])
            await con.query('COMMIT')
            return true;

        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }
    async deleteProduct(product){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            await con.query(dbQueries.DELETE_PRODUCTS,
            [productid])
            await con.query('COMMIT')
            return true;
            
        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }

    async findAllProduct(){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            const products = await con.query(dbQueries.FETCH_PRODUCTS)
            await con.query('COMMIT')
            return JSON.parse(JSON.stringify(products));
            
        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }

    async findProductByProductName(productname){
        let con = await dbConnection();
        try{
            await con.query('START TRANSACTION');
            const product = await con.query(dbQueries.FETCH_BY_PRODUCT_NAME,
                [productname])
            await con.query('COMMIT')
            return JSON.parse(JSON.stringify(product));
            
        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }
    }


}