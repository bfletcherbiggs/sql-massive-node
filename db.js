var massive = require('massive');

var connectionString = "postgres://benjaminbiggs@localhost/sandbox";

var massiveInstance = massive.connectSync({connectionString : connectionString})

module.exports = massiveInstance
