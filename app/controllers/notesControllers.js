const Note = require('../models/note')

module.exports.list = (req, res) => {
    Note.find({_id : req.user._id})
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
    
}