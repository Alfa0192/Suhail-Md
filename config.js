const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212684813143";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTRoc0dsTGZTbGRacUwvZzBibVZEQXhQeEdvQU94UFc4TGhralpRWHV0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFVyN2dqN1pTMldYaTdZVnVfX2lFQVwiLFxuICBcInBob25lSWRcIjogXCJkMmVjYWNlMy1hNWY3LTQ3OTQtOWZjYi03MjdmYjZkZTc3NjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICA3NyxcbiAgICAgIDE1MSxcbiAgICAgIDQ4LFxuICAgICAgMjU0LFxuICAgICAgMTE4LFxuICAgICAgMTgsXG4gICAgICAzMSxcbiAgICAgIDYxLFxuICAgICAgMjIyLFxuICAgICAgNTgsXG4gICAgICAyMjIsXG4gICAgICAyNCxcbiAgICAgIDU1LFxuICAgICAgMjAsXG4gICAgICAxNjQsXG4gICAgICA3MixcbiAgICAgIDU3LFxuICAgICAgMTQ0LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDEwOCxcbiAgICAgIDg4LFxuICAgICAgMTkwLFxuICAgICAgNTEsXG4gICAgICAyOSxcbiAgICAgIDksXG4gICAgICA2MixcbiAgICAgIDUzLFxuICAgICAgMzQsXG4gICAgICAxODQsXG4gICAgICAyMDYsXG4gICAgICAyMDEsXG4gICAgICA0NSxcbiAgICAgIDc0LFxuICAgICAgODEsXG4gICAgICAyLFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFCTDdSUFBFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI2ODQ4MTMxNDM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI2MzgzODU4NzA0NDU3OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT205NDd3TUVLNk80cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIZUp1VzZrVC9vYlBpVnAvcnpENVpQcWVnTEFIVExYVmsxTjU2UkovV1M0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVaRlFvS0VzbGg5SlNVMlA4Y2thS3VvUkJJbUMrTW5rRFoxV1RsRENudFhMclppWUFVbUdtdzYxSEwrUHZGaGlUVDBHT0wzMGxBczJnM1FkbzEvbWpBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNrOTZLV1dOVk15TVBld053ZC9MeVdETDF2VVlqOGk1QnVnUllDZm1LbzdySHI5Z3A2NWJFckZrREMwcFZCSXhHdzhNVXlmL2hOVUo2VVJya21zaEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjY4NDgxMzE0Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwNzc4MDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
