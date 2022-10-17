const Manager = require("../model/manager.model")

module.exports.findManager = (req, res) =>{
    Manager.find()
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json(err));
}
module.exports.createManager = (req, res) => {
    Manager.create(req.body)
        .then(newManager => res.json(newManager))
        .catch(err => res.json(err));
}