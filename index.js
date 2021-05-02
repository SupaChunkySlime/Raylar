const Discord = require('discord.js')
const path = require('path')
const fs = require('fs')
const config = require('./config.json')
const command = require('./commandHandler.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag} is ready to roll!`)
    client.user.setActivity(
        'for !help', {
        type: "WATCHING"
    }).catch(console.error);

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands('commands')
    

client.login(config.token)
})