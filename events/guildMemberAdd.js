const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = async (client, message, member) =>{
	const canvas = Canvas.createCanvas(900,589);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./img/image.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

	//const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format : 'jpg'}));
	//ctx.drawImage(avatar, 25,0,200,canvas.height);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'yolo.png');
	client.channels.cache.get('524639335862239242').send(attachment);
};
