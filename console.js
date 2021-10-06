const repl = require('repl');
const db = require('./src/models');

db.sequelize.authenticate().then(() => {
  const replServer = repl.start({ useColors: true });
  Object.assign(replServer.context, db);
});
