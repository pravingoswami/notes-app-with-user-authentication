const Note = require('../models/note')

module.exports.list = (req, res) => {
    Note.find({user : req.user._id})
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    const body = req.body
    const note = new Note(body)
    note.user = req.user._id
    note.save()
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Note.findOne({_id : id, user : req.user._id})
        .then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})
        ,then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Note.findOneAndDelete({_id : id, user : req.user._id})
        .then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}