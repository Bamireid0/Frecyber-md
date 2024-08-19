//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "amahdavid419@gmail.com";
global.location = "Akwa ibom,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Bamireid0/Frecyber-md";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "2348152119668";
global.sudo = process.env.SUDO || "2348152119668";
global.owner = process.env.OWNER_NUMBER || "2348152119668";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUIrazA2Y085OWJISGNoSDNXYzZxcUw3SUl6Rml2c3NoS0RLUkl3T3MzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0xLaUhRMmE4VkNyYzBGQUFVZlYvVGh6OE5PV0t1TU10SVFraHpGNzczQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSHpDZ3pNTFYxQVU0bjl6RTlncVh2eW83YUdyeXN1Qno5WmxEZUhvL0ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRkpkZHZnQUMwdnI4MTl4T1BXaFBXU09oUitJQkhmeC85VEF2bnVoTGhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMOUwrd2Q2d0hucUw4Y1kwZE9nN2ZocW4zY1JmbURFVDlFRGdnL1VqRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVhcGt1clhUa1hmQXB3OENITk41VzR1dVJrNWZuUVZoSmxNeGxBam43aEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BIbXlwZzgweHJOUW5aUE1JUk5vZzN1OHY4S3lIRUZpYW1EN0ptYjVXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazBOcElxcnFpWG5zK2E2WE9PUEhDTW1xZGxLYTRGMWUzem1XZjljcml4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJKMmx6SWUraGdpRTZzbkd5cnI2OGZjQlBjVzk3SmphY0FMMUo4M29jZlBPdXVRdnA4YkxiQ2w1YVVyQ29TN05kOGRJQmM3dU41UzR5ajFleHBGQmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IjJyS1hKVWVzZTlESEJZZHR2cmNrTXZPbGJoM3B0dy9EL3FqVUJwYVhDM0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODE1MjExOTY2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QTUwN0E3OTEzRURBMkRDMDg1RDdCNEI4QjgwQkQ1QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODMxODc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTUyMTE5NjY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk4MjhBQTI5OTUzNTI2M0FEMDM0MjE0QUM3RTdFNUU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM4MzE4Nzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJrNE1iRXJBU3RtMEdVdDI5S1JmdlEiLCJwaG9uZUlkIjoiN2U2NTk1OTEtYWYxOC00YTRmLWJjNzQtOTVmYzBjMGNiYzJjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZZVW5Hc2lOT3c5aCtMY0J3U3RFQ2F0dVJCZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WFQ4dWlWNk04MU4yTU1HS1krOTZKVVFGOGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzdYRDEyOE0iLCJtZSI6eyJpZCI6IjIzNDgxNTIxMTk2Njg6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9nMERVUXM2eit0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZHcyUmpPcmMxZ2toSmlmSFU5WFRYS0VsVE5QQ05BN3lROUtvQ05qbDIzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTmVvRTMyMEVMUi90VERNNE85MEg4NjlDU1Z6eFhQZGdNYVFWdGpYMDFvV1R3by9HYkdxMUlFVlN5ZGF4OHdiM09qR2dOL2thNHBLcGg3V0JkRTZRQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlcrQXkwYXZ3VUx5T3dRc2pScVJVT2lrUDZBUTVIS2ZGRDZYMUxpMnROL2lORjRpRjg3eWZhMWJ5cEpuYWk3eUl1bjIyQ2FrVVBEZ0VGM3M5ZitIcWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1MjExOTY2ODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhjTmtZenEzTllKSVNZbngxUFYwMXloSlV6VHdqUU84a1BTcUFqWTVkdC8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4MzE4NzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRk5rIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "> Bamireid",
  author: process.env.PACK_AUTHER || "Bamireid",
  packname: process.env.PACK_NAME || "Bamireid",
  botname: process.env.BOT_NAME || "Bamireid-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Bamireid",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
