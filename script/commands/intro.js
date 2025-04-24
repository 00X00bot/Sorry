const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'intro',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Rickciel',
  prefix: true,
  description: 'Display bot owner information',
  category: 'system',
  usages: '',
  cooldowns: 20
};

module.exports.run = async ({ api, event }) => {
  try {
    const ownerInfo = {
      name: 'Tanvir Ahmed',
      gender: 'Male',
      age: '18+',
      study: '𝘋𝘪𝘱𝘭𝘰𝘮𝘢 𝘪𝘯 𝘌𝘯𝘨𝘪𝘯𝘦𝘦𝘳𝘪𝘯𝘨',
      height: '5\'8ft',
      home: 'Chandpur, Bangladesh',
      status: 'single'
    };
//https://drive.google.com/
    const videoUrl = 'https://drive.google.com/uc?export=download&id=1Df6isR8uHEqWi3_CfLpMFK0sbsDLKEx1'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));
//  𝘊𝘪𝘷𝘪𝘭 𝘛𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘺 𝘢𝘵 𝘓𝘢𝘬𝘴𝘮𝘪𝘱𝘶𝘳 𝘗𝘰𝘭𝘺𝘵𝘦𝘤𝘩𝘯𝘪𝘤 𝘐𝘯𝘴𝘵𝘪𝘵𝘶𝘵𝘦
    const response = `
𝘛𝘩𝘪𝘴 𝘉𝘰𝘵 𝘖𝘸𝘯𝘦𝘳 𝘐𝘯𝘧𝘰\n\n
[🤍] 𝘕𝘢𝘮𝘦: ${ownerInfo.name}
[🤍] 𝘏𝘰𝘮𝘦: ${ownerInfo.home}
[🤍] 𝘚𝘵𝘶𝘥𝘺: \n${ownerInfo.study}\n⚜️ 𝘓𝘢𝘬𝘴𝘮𝘪𝘱𝘶𝘳 𝘗𝘰𝘭𝘺𝘵𝘦𝘤𝘩𝘯𝘪𝘤 𝘐𝘯𝘴𝘵𝘪𝘵𝘶𝘵𝘦 \n⚜️ 𝘊𝘪𝘷𝘪𝘭 𝘋𝘦𝘱𝘢𝘳𝘵𝘮𝘦𝘯𝘵
[🤍] 𝘎𝘦𝘯𝘥𝘦𝘳 : ${ownerInfo.gender}
[🤍] 𝘈𝘨𝘦: ${ownerInfo.age}
[🤍] 𝘏𝘦𝘪𝘨𝘩𝘵: ${ownerInfo.height}
[🤍] 𝘴𝘵𝘢𝘵𝘶𝘴: ${ownerInfo.status} \n\n𝘛𝘩𝘢𝘯𝘬𝘴 𝘧𝘰𝘳 𝘶𝘴𝘪𝘯𝘨 𝘛𝘢𝘯𝘷𝘪𝘳𝘉𝘰𝘵
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🥵', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};
