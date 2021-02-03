module.exports ={
    INSERT_PRODUCTS:`INSERT INTO products VALUES(?,?,?,?)`,
    FETCH_PRODUCTS:`SELECT * FROM products`,
    UPDATE_PRODUCTS:`UPDATE products SET price=? WHERE productid=?`,
    DELETE_PRODUCTS:`DELETE FROM products where productid=?`,
    FETCH_BY_PRODUCT_NAME:`SELECT * FROM products where productname=?`
}