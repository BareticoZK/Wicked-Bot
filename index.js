const { 
    Client, 
    GatewayIntentBits, 
    Partials, 
    Collection 
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const Discord = require('discord.js');

const client = new Client({ 
    intents: [Guilds, GuildMembers, ThreadMember],
    partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token)

client.on("guildMemberAdd", async(member) =>{

    const Discord = require('discord.js');
    

    if(member.guild.id === "1083222388377931786"){ 
        const Canvas = require("canvas")
        const canvas = Canvas.createCanvas(1028, 468)
        const ctx = canvas.getContext("2d")

        const background = await Canvas.loadImage("https://i.imgur.com/IRVxhJW.jpg")
        ctx.drawImage(background, 0 , 0, canvas.width, canvas.height)
        ctx.textAlign = 'center'
        ctx.fillStyle = '#ffffff' 
        ctx.font = "60px Gotham-Black"
    
        ctx.fillText('BIENVENID@', 514, 340)
    
        ctx.textAlign = 'center'
        ctx.fillStyle = '#ffffff' 
        ctx.font = "25px Gotham-Black"
    
        ctx.fillText(`${member.user.tag}`, 514, 410)
    
        ctx.textAlign = 'center'
        ctx.beginPath()
        ctx.arc(514, 161, 124, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()  
        
        ctx.textAlign = 'center'
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ size: 1024, dynamic: false, extension: "png" }))
        ctx.drawImage(avatar, 388, 35, 250, 250)

        const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), "./img/welcome.png") //mo le cambies el nombre
        client.channels.cache.get("1083535795887030292").send({content: `¡Bienvenido ${member.user.tag} al servidor ZitricoMusic, lee las normas y diviertete en nuestro servidor!`, files: [attachment] })
    }
})





