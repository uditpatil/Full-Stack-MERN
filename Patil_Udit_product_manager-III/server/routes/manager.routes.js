const ProductManager = require("../controllers/manager.controller");

module.exports = (app) => {
    app.post('/api/manager', ProductManager.createManager);
    app.get('/api/products', ProductManager.findProducts);
    app.get('/api/products/:id', ProductManager.findSingleProduct);
    app.put('/api/products/:id', ProductManager.updateSingleProduct);
    app.delete('/api/products/:id', ProductManager.deleteSingleProduct);
}