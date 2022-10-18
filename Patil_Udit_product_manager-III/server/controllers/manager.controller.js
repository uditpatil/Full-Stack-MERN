const Manager = require("../model/manager.model")

module.exports.findProducts = (req, res) =>{
    Manager.find()
        .then(allProduct => res.json(allProduct))
        .catch(err => res.json(err));
}
module.exports.createManager = (req, res) => {
    Manager.create(req.body)
        .then(newManager => res.json(newManager))
        .catch(err => res.json(err));
}

module.exports.findSingleProduct = (req, res) => {
    Manager.findOne({_id: req.params.id})
        .then(singleProduct => res.json(singleProduct))
        .catch(err => console.log(err))
}

module.exports.updateSingleProduct = (req, res) => {
    Manager.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updateProduct => res.json(updateProduct))
        .catch(err => console.log(err))
}

module.exports.deleteSingleProduct = (req, res) => {
    Manager.deleteOne({_id: req.params.id})
        .then(deleteProduct => res.json(deleteProduct))
        .catch(err => console.log(err))
}
