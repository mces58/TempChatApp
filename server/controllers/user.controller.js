import User from '../models/user.model.js'

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id

    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      '-password',
    )

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
