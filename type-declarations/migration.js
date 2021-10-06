/**
 * @callback DatabaseMigrationFn
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize')} Sequelize
 */

module.exports = {
  /** @type {DatabaseMigrationFn} */
  up: (queryInterface, Sequelize) => {
    // Code Here
  },
  /** @type {DatabaseMigrationFn} */
  down: (queryInterface, Sequelize) => {
    // Code Here
  },
};
