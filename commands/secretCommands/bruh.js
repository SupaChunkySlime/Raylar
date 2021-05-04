module.exports = {
    commands: 'bruh',
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        message.channel.send("meme")
    },
}