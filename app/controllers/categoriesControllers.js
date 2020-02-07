const Category = require('../models/category')

module.exports.list = (req, res) => {
    Category.find({user : req.user._id})
        .then(category => res.json(category))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.user = req.user._id
    category.save()
        .then(category => res.json(category))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Category.findOne({_id : id, user : req.user._id})
        .then(category => category ? res.json(category) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})
        ,then(category => category ? res.json(category) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Category.findOneAndDelete({_id : id, user : req.user._id})
        .then(category => category ? res.json(category) : res.json({}))
        .catch(err => res.json(err))
}