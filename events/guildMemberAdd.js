const Canvas = require('canvas');
const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = async (client,member) =>{
	const canvas = Canvas.createCanvas(500,250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./img/Welcome.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

	ctx.fillStyle = '#ffffff';
	ctx.font = "15pt Arial";
	ctx.fillText(member.user.username, canvas.width / 1.7, canvas.height / 3);
	ctx.fillText(' Bienvenue sur mon serveur :)', canvas.width / 2.5, canvas.height / 5);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.avatarURL({format: 'png'}));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'yolo.png');
	client.channels.cache.get('720255350808379451').send(attachment);
	console.log(member);
};