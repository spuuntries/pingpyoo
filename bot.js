/*
        Kek's pinging to shit module for Piyo birbday.
        Copyright (C) 2021 kekboi, Art Union org.

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU Affero General Public License as
        published by the Free Software Foundation, version 3 of the License only.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Affero General Public License for more details.

        You should have received a copy of the GNU Affero General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

require("dotenv").config();
const procenv = process.env,
  Client = require("discord.js").Client,
  client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_WEBHOOKS"],
  }),
  pkg = require("./package.json"),
  gura = procenv.WEBURL.split("/webhooks/").pop();

function logger(string = "logger logging") {
  console.log(`${new Date()}: ${string}`);
}

function login() {
  client.login(procenv.TOKEN).catch(() => {
    logger(`failed to login!\nRetrying in 5 secs...`);
    setTimeout(() => {
      login();
    }, 5000);
  });
}

login();

client.on("ready", () => {
  logger(`${client.user.tag} using ${pkg.name} v${pkg.version} ready!`);
  logger(`fetching guilds...`);
  client.guilds.fetch().then((ina) => {
    if (ina.size > 5) {
      logger(
        `fetched ${ina.size} guilds!\n[${ina
          .first(5)
          .map((g) => g.name)
          .join(", ")} ...]`
      );
    } else {
      logger(
        `fetched ${ina.size} guilds!\n[${ina.map((g) => g.name).join(", ")}]`
      );
    }
  });
  
  function pingPoo() {
    let randTim = Math.floor(Math.random() * procenv.TIMERANGE),
    msges = procenv.MESSAGES.split("|")

    logger(`Sending anuda ping in ${randTim} minutes!`);
    setTimeout(() => {}, randTim * 60000);
  }
});
