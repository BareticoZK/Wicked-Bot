const {  ChatInputCommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command)
        return interaction.reply({
            content: "This commands is outdated",
            ephermal: true,
        });

        if (command.developer && interaction.user.id !== "1083522176751247403")
    
        return interaction.reply({
            content: "Este comando es solo para administradores.",
            ephermal: true,

        });

        command.execute(interaction, client);

    }

}