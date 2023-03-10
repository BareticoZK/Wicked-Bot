const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
      console.log("El bot se ha cargado exitosamente.");

      loadCommands(client);
    },
  };
  