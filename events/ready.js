const {prefix} = require('../config/config.json');

module.exports = (client) => {
    console.log('Ready');
    client.user.setPresence({ activity: { name:'prefix: '+prefix}, status: 'online' });
};
