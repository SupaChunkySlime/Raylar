module.exports = {
    commands: 'meme',
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        message.channel.send("BRUH!!!")
    },
}