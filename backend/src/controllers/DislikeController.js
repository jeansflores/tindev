const Dev = require('../models/Dev')

module.exports = {
  async store (req, res) {
    const { user: userId } = req.headers
    const { id: devId } = req.params

    const loggedDev = await Dev.findById(userId)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    if (loggedDev.dislikes.includes(targetDev._id)) {
      return res.json(loggedDev)
    }

    loggedDev.dislikes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}
