const express = require('express')
const usersControllers = require('../app/controllers/usersControllers')
const notesControllers = require('../app/controllers/notesControllers')
const categoriesControllers = require('../app/controllers/categoriesControllers')

const authenticateUser = require('../app/middleware/authenticateUser')

const router = express.Router()

router.get('/users/info', usersControllers.list)
router.post('/users/register', usersControllers.register)
router.post('/users/login', usersControllers.login)
router.get('/users/account',authenticateUser, usersControllers.account)
router.delete('/users/logout',authenticateUser, usersControllers.logout)
router.delete('/users/destroy/:id', usersControllers.destroy)


router.get('/notes', authenticateUser, notesControllers.list)
router.post('/notes', authenticateUser, notesControllers.create)
router.get('/notes/:id', authenticateUser, notesControllers.show)
router.put('/notes/:id', authenticateUser, notesControllers.update)
router.delete('/notes/:id', authenticateUser, notesControllers.destroy)

router.get('/categories', authenticateUser, categoriesControllers.list)
router.post('/categories', authenticateUser, categoriesControllers.create)
router.get('/categories/:id', authenticateUser, categoriesControllers.show)
router.put('/categories/:id', authenticateUser, categoriesControllers.update)
router.delete('/categories/:id', authenticateUser, categoriesControllers.destroy)

module.exports = router