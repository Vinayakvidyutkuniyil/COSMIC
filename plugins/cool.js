const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙ᴄᴏsᴍɪᴄ ʙᴏᴛ💙■□══╗*\n           \n*⚜═ᴀɴᴜsᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 ᴀɴᴜsᴇʀ-ᴀɴsʜɪᴅ - https://api.whatsapp.com/send?phone=+916238560742&text=Please%20add%20ᴀɴsʜɪᴅ%20bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙ᴀᴍʀᴜ-sᴇʀ💙■□══╝*\n\n*▷Creator: Aʙᴜ-Jᴀsɪʟ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴄᴏsᴍɪᴄ ʙᴏᴛ ᴏᴡɴᴇʀ ɪs ᴀɴᴜsᴇʀ- »« ʀᴇᴀʟ ɴᴀᴍᴇ-ᴀɴsʜɪᴅ═🌟*\n\n*🔅https://github.com/ANUSER1/COSMIC*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔══■□💙ᴄᴏsᴍɪᴄ ʙᴏᴛ💙■□══╗*\n           \n*⚜═ᴀɴᴜsᴇʀ═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 ᴀɴsʜɪᴅ - https://api.whatsapp.com/send?phone=+916238560742&text=Please%20add%20ᴀɴᴜsᴇʀ%20bot%20ɢʀᴏᴜᴘ%20💙*\n*            *\n*╚══■□💙ᴀᴍʀᴜ-sᴇʀ💙■□══╝*\n\n*▷Creator: Aʙᴜ-Jᴀsɪʟ ✝︎*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Gɪᴛ Lɪɴᴋs*\n           *\n🌟═ᴄᴏsᴍɪᴄ ʙᴏᴛ ᴏᴡɴᴇʀ ᴀɴᴜsᴇʀ »« ʀᴇᴀʟ ɴᴀᴍᴇ-ᴀɴsʜɪᴅ═🌟*\n\n*🔅https://github.com/ANUSER1/COSMIC*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
