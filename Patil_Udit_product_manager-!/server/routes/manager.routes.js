const ProductManager = require("../controllers/manager.controller");

module.exports = (app) => {
    app.post('/api/manager', ProductManager.createManager);
    app.get('/api/products', ProductManager.findManager);
}