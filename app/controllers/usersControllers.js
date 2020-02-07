const User = require('../models/user')

module.exports.list = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.register = (req, res) => {
    const body = req.body
    body.ip = {register : [req.ip]}
    const user = new User(body)
    user.save()
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.login = (req, res) => {
    const body = req.body
    // User.findByCredentials(body.email || body.mobile || body.username, body.password)   
    User.findByCredentials(body.email, body.password)   
        .then(user => user.generateToken(req.ip))
            .then(token => res.setHeader('x-auth', token).send({}))
            .catch(err => res.send(err))
}

module.exports.account = (req, res) => {
    res.send(req.user)
}

module.exports.logout = (req, res) => {
    const {user , token} = req
    User.findByIdAndUpdate(user._id, {$pull : {tokens : {token : token}}})
        .then(() => res.send({notice : 'user successfully logout'}))
        .catch(err => res.send(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(user => user ? res.json(user) : res.json({}))
        .catch(err => res.json(user))
}