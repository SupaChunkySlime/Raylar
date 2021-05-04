module.exports = {
    commands: ['cc', 'clearchannel'],
    permissionError: 'You need moderator permissions to run this command!',
    minArgs: 0,
    maxArgs: 0,
    callback: (client, message, arguments, text) => {
        message.channel.messages.fetch().then(results => {
            message.channel.bulkDelete(results)
        })

    },
    permissions: ['MANAGE_MESSAGES'],
}