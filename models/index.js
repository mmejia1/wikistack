const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: {
    type: Sequelize.STRING,
    validate: {
      unique: true,
      allowNull: false,
      len: [3, 20],
      isAlphanumeric: true,
    },
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN,
  },
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      isAlpha: true,
      //notNull: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
});
module.exports = {
  db,
  Page,
  User,
};
