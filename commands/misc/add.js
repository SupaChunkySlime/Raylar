module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'You need admin permissions to run this command!',
    minArgs: 2,
    maxArgs: 2,
    callback: (client, message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`the sum is ${num1 + num2}`)
    },
}