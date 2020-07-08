import tmi from 'tmi.js'

const client = new tmi.Client({
	options: { debug: true},
	connections: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'MisterBFFBot'
		password: 'oauth:rwarp5mye2k2s54j0hzlchvmjgdwoo'
	},
	channels: [ 'Mr_BFF']
});
client.connect();

client.on("connected", (address, port) => {
	client.action(channel, "Bot has connected." + address + ":" + port)
});