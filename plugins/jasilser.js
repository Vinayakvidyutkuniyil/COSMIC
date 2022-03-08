/* Copyright (C) 2021 AMALSER.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amalser - Amal
Wa.me/+918281440156
*/

const Neotro = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Neotro.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'ᴄᴏsᴍɪᴄ ʙᴏᴛ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ', description: "⚙Bᴏᴛ Oᴡɴᴇʀ Nᴜᴍᴇʀ\n\n\n*◁ === Tɪs Oᴡɴᴇʀs ᴀɴᴜsᴇʀ === ▷*\n\n🎭 *ᴄᴏsᴍɪᴄ ʙᴏᴛ ʙʏ ᴀɴᴜsᴇʀ *\n 🔮 http://wa.me/+916238560742.\n\n ", rowId:" rowid1"},
        {title: 'Gɪᴛ', description: "Cᴏsᴍɪᴄ Bᴏᴛ Mᴀᴋɪɴɢ Lɪɴᴋ.\n\n\n*◁ === 🥰🤗 Gɪᴛ Lɪɴᴋ === ▷*\n\nhttps://github.com/ANUSER1/COSMIC\n\n ", rowId:"rowid2"},
        {title: 'ᴀɴᴜsᴇʀ  Bᴏᴛ Oғғɪᴄᴀʟ Gʀᴏᴜᴘ Bʏ ᴀɴsʜɪᴅ', description: "Gʀᴏᴜᴘ Lɪɴᴋ .\n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk\n\n ", rowId:" rowid5"},
        {title: 'Bᴏᴛ Gʀᴏᴜᴘ Dᴇsᴄʀɪᴘᴛɪᴏɴ', description: "Nɪʏᴀᴍᴀᴍ Iɴɪ Eʟʟᴀᴠᴀʀᴋᴋᴜᴍ Bᴀᴅʜᴀᴋᴀ Mᴀɴ \n\n\n☃️ᴏɴɴᴜᴍ ɪʟʟᴀ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ😁 \n\n  ", rowId:" rowid6"}
       ]
       
       const sections = [{title: "ᴄᴏsᴍɪᴄ ʙᴏᴛ ❤️", rows: rows}]
       
       const button = {
        buttonText: '💚ᴀɴᴜsᴇʀ Bᴏᴛ💚',
        description: "💖✻ᴀɴᴜSᴇʀ Bᴏᴛ✻💖",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
