import fetch from "node-fetch";
require('dotenv').config();

const appID = process.env.APP_ID;
const guildID = process.env.GUILD_ID;
const apiEndpoint =
  `https://discord.com/api/v8/applications/${appID}/guilds/${guildID}/commands`;
const botToken = process.env.BOT_TOKEN;

const commandData = {
  name: "vms",
  description: "VMServer Commands",
  options: [
	{
		name: "action",
		description: "start/stop",
		type: 3,
		required: true,
		choices: [
			{
				name: "start",
				value: "start"
			},
			{
				name: "stop",
				value: "stop"
			},
			{
				name: "test",
				value: "test"
			}
		]

    },
  ],
};

async function main() {

  const response = await fetch(apiEndpoint, {
    method: "post",
    body: JSON.stringify(commandData),
    headers: {
      Authorization: "Bot " + botToken,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  console.log(json);
}
main();