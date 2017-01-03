//database connection
(function() {
    var client, mysql, settings;

    settings = require('./settings');

    client = null;
   //引入mysql引擎
    mysql = require('mysql');

    exports.getDbCon = function() {
        var err;
        try {
            if (client) {
                client = mysql.createConnection(settings.db);
                console.log("testcon1");
                client.connect();
            } else {
                client = new mysql.createConnection(settings.db);
                console.log("testcon2");
                client.connect();
            }
        } catch (_error) {
            err = _error;
            throw err;
        }
        return client;
    };

}).call(this);