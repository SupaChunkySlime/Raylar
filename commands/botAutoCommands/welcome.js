const mongo = require('.../mongo')
const welcomeSchema = require('.../schemas/welcome-schema')
const { Mongoose } = require('mongoose')

module.exports = {
    commands: 'setWelcome',
    expectedArgs: '<message>',
    permissions: 'ADMINISTRATOR',
    permissionError: 'You need admin permissions to run this command!',
    minArgs: 0,
    maxArgs: null,
    callback: (async, client, message, arguments, text) => {
        const { member, channel, content, guild } = message

        await mongo().then(async (mongoose => {
            try {
                await new welcomeSchema({
                    _id: guild.id,
                    channelId: channel.id,
                    text: content
                }).save()
            } 
            finally {
                mongoose.connection.close()
            }
        })
    },
}