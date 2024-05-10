const express = require('express')
const {
    getUsers,
    createNewUser,
    deleteUser,
    updateUser
} = require('../controllers/usercontroller')

const router = express.Router()

// GET all workouts
router.get('/users', getUsers)

// POST a new workout
router.post('/', createNewUser)

// DELETE a workout
router.delete('/:id', deleteUser)

// UPDATE a workout
router.patch('/:id', updateUser)

module.exports = router