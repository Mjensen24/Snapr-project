'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        avatar: faker.image.imageUrl(),
        description: 'I am not the user you are looking for',
        createdAt: faker.date.past(3),
        updatedAt: new Date()
      },
    ];

    const extraUsers = 30;

    for(let i = 0; i < extraUsers; i++) {
      const createdAt = faker.date.past(3);
      const first = faker.name.firstName();
      const last = faker.name.lastName();
      users.push({
        username: faker.internet.userName(first, last),
        email: faker.internet.email(first, last),
        hashedPassword: bcrypt.hashSync(faker.internet.password(8, false, null, 'Ca!7'), 10),
        avatar: `${faker.image.imageUrl()}/any?dummy=${i}`,
        description: 'Coding is really fun!',
        createdAt: new Date(),
        updatedAt: faker.date.between(createdAt, faker.date.recent()),
      });
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
