const {prefix} = require('../Config.json');

module.exports = (client) => {
    console.log('Ready');
    client.user.setPresence({ activity: { name:'prefix: '+prefix}, status: 'online' });
};
