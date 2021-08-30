module.exports = async (bot, guild) => {
  let found = 0;
  guild.channels.cache.map((c) => {
    if (found === 0) {
      if (c.type === "text") {
        if (c.permissionsFor(bot.user).has("VIEW_CHANNEL") === true) {
          if (c.permissionsFor(bot.user).has("SEND_MESSAGES") === true) {
            c.send(`Suh King(s) :crown:`, {
              embed: {
                title: ":sparkles: Ayo vibe check :call_me:",
                color: 0x2471a3,
                description:
                  "The prefix for all my commands is `?`, e.g: `?play`.",
                fields: [
                  {
                    name: ":musical_note:   ?play/p <your-song-name>",
                    value: "vibes will play your Bop!",
                  },
                  {
                    name: ":tools:   ?auto",
                    value: "Toggle Autoplay On/Off",
                  },
                  {
                    name: ":fast_forward:   ?skip",
                    value: "Skip current song in queue",
                  },
                  {
                    name: ":mute:   ?stop",
                    value: "Stop Vibing",
                  },
                ],

                footer: {
                  text: "vibes created and developed by Untoxicify#7304",
                },
              },
            });

            found = 1;
          }
        }
      }
    }
  });
};
