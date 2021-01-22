const Sequelize = require('sequelize')
const { db } = require('./models')

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: {
    type: Sequelize.STRING,
    validate: {
      unique: true,
      allowNull: false,
      len: [3,20],
      isAlphanumeric: true
    },
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN
  }
})

module.exports = Page
