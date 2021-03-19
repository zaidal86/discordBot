const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {discord} = require('./config/tokens.json');

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./Events/${file}`);
      let evtName = file.split('.')[0];
      console.log(`Loaded event '${evtName}'`);
      client.on(evtName, evt.bind(null, client));
    });
});

fs.readdir('./Commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      let props = require(`./Commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`Loaded command '${cmdName}'`);
      client.commands.set(cmdName, props);
    });
});

client.login(discord);
