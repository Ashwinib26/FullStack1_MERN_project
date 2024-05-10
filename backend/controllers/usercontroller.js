const Users = require('../models/usersModel')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
  const workouts = await Users.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}

// create a new user
const createNewUser = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const workout = await Users.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such User'})
  }

  const workout = await Users.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such User'})
  }

  res.status(200).json(workout)
}

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such User'})
  }

  const workout = await Users.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such User'})
  }

  res.status(200).json(workout)
}

module.exports = {
  getUsers,
  createNewUser,
  deleteUser,
  updateUser
}