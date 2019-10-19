const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "!"

client.on("ready", () => {
   console.log("Encendido");
});
client.on("message", (message) => {
if(message.content.startsWith("hola")) {
   message.channel.send("¡Hola! ¿Que tal?") };
if(message.content.startsWith("ayuda")){
   message.channel.send("¿Necesitas ayuda? ¡Contacta con algun moderador o en el canal de soporte para que resuelvas tus dudas!")
}
if(message.content.startsWith(prefix+"private2")){
   const embed = new Discord.RichEmbed() 
   .setTitle("REFUGIADOS ROLEPLAY")
   .setColor(0xEE1717)
   .setDescription("Refugiados Roleplay es un servidor de roleplay hispanohablante que está basada en la plataforma FiveM, ofreciendo una experiencia de rol profesional y con ámbitos en este aspecto muy trabajados.")
   .setFooter("Refugiados Roleplay v.1", client.user.avatarURL)
   .setImage(client.user.avatarURL)
   .setTimestamp()
   .setURL("https://discord.gg/Xze9cmU")
   .addField("¿Qué buscamos de tí?", "Diversión, pues un servidor de roleplay no se puede llevar a cabo sin ayuda del usuario y este es el que ofrece la diversión.")
   .addField("¿Cómo puedo entrar?", "Deberás pasar un proceso de certificación (whitelist) y cuando recibas el verificado podrás acceder al servidor.",  true)
   .addField("¡Antes de nada!", "Recuerda leer las normativas y aspectos importantes.", true);
   
      
   message.channel.send({embed});
   }
});

client.login("NjM1MDc1NDMxMDQ0ODc0MjQw.XasMog.c7GbrbayOZzo7wfQNxQuOrgi1ZU")