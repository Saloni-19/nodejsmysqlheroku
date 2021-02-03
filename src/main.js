//const dbConnection = require('./connections/dbConnection');

//console.log(dbConnection())

const ProductRepository = require('./Repository/productRepository')
const productRepository = new ProductRepository();

const main = async () => {
    //For Saving New Data------------------------------------------------------------------------------------------------------------------
    //let savedProduct = await productRepository.saveProduct({
        //productid:4,
        //productName:'IPhoneXR',
        //price:'35670.0',
    //description:'IPhone XR'
     //})
    //console.log('Saved products-->',savedProduct);

    //For Updating The Data----------------------------------------------------------------------------------------------------------------
    //let updatedProduct = await productRepository.updateProduct({
        //productid:4,
        //productName:'IPhoneXR',
        //price:'45000.5',
        //description:'IPhone XR'
    //})
    //console.log('Updated products-->',updatedProduct);

    //For Deleting The Data----------------------------------------------------------------------------------------------------------------
    //let deletedProduct = await productRepository.deleteProduct(4)
    //console.log('Deleted products-->',deletedProduct);

    //For Finding all The Data----------------------------------------------------------------------------------------------------------------
    //const products = await productRepository.findAllProduct()
    //console.log('Products List:: ',products)

    //For Searching and Getting The Data By Product Name----------------------------------------------------------------------------------------------------------------
    const fetchByProductName = await productRepository.findProductByProductName({
        productName:'IPhoneXR'
    })
    console.log('Fetch Product details By product Name-->',fetchByProductName);

}

main();