const axios = require("axios");
const path = require("path");
const fs = require("fs");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports.config = {
  name: "album",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",
  description: "Displays album options for selection.",
  usePrefix: true,
  prefix: true,
  category: "Media",
  commandCategory: "Media",
  usages:
    "Only or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime/aesthetic/cat/lyrics/love/sigma]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  if (!args[0]) {
    {
      api.setMessageReaction("😘", event.messageID, (err) => {}, true);
    }
    const albumOptions = [
      "𝘍𝘶𝘯𝘯𝘺 𝘝𝘪𝘥𝘦𝘰",
 "𝘐𝘴𝘭𝘢𝘮𝘪𝘤 𝘝𝘪𝘥𝘦𝘰",
 "𝘚𝘢𝘥 𝘝𝘪𝘥𝘦𝘰",
 "𝘈𝘯𝘪𝘮𝘦 𝘝𝘪𝘥𝘦𝘰",
 "𝘊𝘢𝘳𝘵𝘰𝘯 𝘝𝘪𝘥𝘦𝘰",
 "𝘓𝘰𝘧𝘪 𝘝𝘪𝘥𝘦𝘰",
 "𝘏𝘰𝘳𝘯𝘺 𝘝𝘪𝘥𝘦𝘰",
 "𝘊𝘰𝘶𝘱𝘭𝘦 𝘝𝘪𝘥𝘦𝘰",
 "𝘍𝘭𝘰𝘸𝘦𝘳 𝘝𝘪𝘥𝘦𝘰",
 "𝘙𝘢𝘯𝘥𝘰𝘮 𝘝𝘪𝘥𝘦𝘰",
    ];
    const message =
      "[🤍] 𝘤𝘩𝘰𝘪𝘤𝘦 𝘢𝘯𝘺 𝘰𝘱𝘵𝘪𝘰𝘯 𝘣𝘢𝘣𝘺\n" +
      "✿━━━━━━━━━━━━━━━━━━━━━━━✿\n" +
      albumOptions
        .map((option, index) => `🎀 | ${index + 1}. ${option} 🐤`)
        .join("\n") +
      `\n✿━━━━━━━━━━━━━━━━━━━━━━━✿\n🔰 | 𝘗𝘢𝘨𝘦 [1/2]\nℹ | 𝘵𝘺𝘱𝘦 ${global.config.PREFIX}album 2 - 𝘵𝘰 𝘴𝘦𝘦 𝘯𝘦𝘹𝘵 𝘱𝘢𝘨𝘦.\n✿━━━━━━━━━━━━━━━━━━━━━━━✿`;
    await api.sendMessage(
      { body: message },
      event.threadID,
      (error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          link: albumOptions,
        });
      },
      event.messageID,
    );
  } else if (args[0] === "2") {
    {
      api.setMessageReaction("🖤", event.messageID, (err) => {}, true);
    }
    const albumOptions = [
 "𝘈𝘦𝘴𝘵𝘩𝘦𝘵𝘪𝘤 𝘝𝘪𝘥𝘦𝘰",
 "𝘚𝘪𝘨𝘮𝘢 𝘙𝘶𝘭𝘦",
 "𝘓𝘺𝘳𝘪𝘤𝘴 𝘝𝘪𝘥𝘦𝘰",
 "𝘊𝘢𝘵 𝘝𝘪𝘥𝘦𝘰",
 "18+ 𝘝𝘪𝘥𝘦𝘰",
 "𝘍𝘍 𝘝𝘪𝘥𝘦𝘰",
 "𝘍𝘰𝘰𝘵𝘣𝘢𝘭𝘭 𝘝𝘪𝘥𝘦𝘰",
 "𝘎𝘪𝘳𝘭 𝘝𝘪𝘥𝘦𝘰",
 "𝘍𝘳𝘪𝘦𝘯𝘥𝘴 𝘝𝘪𝘥𝘦𝘰",
 "𝘊𝘳𝘪𝘤𝘬𝘦𝘵 𝘝𝘪𝘥𝘦𝘰",
    ];
    const message =
      "[🤍] 𝘤𝘩𝘰𝘪𝘤𝘦 𝘢𝘯𝘺 𝘰𝘱𝘵𝘪𝘰𝘯 𝘣𝘢𝘣𝘺\n" +
      "✿━━━━━━━━━━━━━━━━━━━━━━━✿\n" +
      albumOptions
        .map((option, index) => `🎀 | ${index + 11}. ${option} 🐤`)
        .join("\n") +
      "\n✿━━━━━━━━━━━━━━━━━━━━━━━✿\n🔰 | 𝘗𝘢𝘨𝘦 [ 2/2 ]\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";
    await api.sendMessage(
      { body: message },
      event.threadID,
      (error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          link: albumOptions,
        });
      },
      event.messageID,
    );
  }
  //------------Video Add--------------//
  const validCommands = [
    "cartoon",
    "photo",
    "lofi",
    "sad",
    "islamic",
    "funny",
    "horny",
    "anime",
    "love",
    "baby",
    "lyrics",
    "sigma",
    "photo",
    "aesthetic",
    "cat",
    "flower",
    "ff",
    "sex",
    "girl",
    "football",
    "friend",
    "cricket",
  ];
  {
    api.setMessageReaction("👀", event.messageID, (err) => {}, true);
  }
  if (args[0] === "list") {
    try {
      const lRes = await axios.get(`${await baseApiUrl()}/album?list=dipto`);
      const data = lRes.data;
      api.sendMessage(
        `[🩵] 𝘛𝘰𝘵𝘢𝘭 𝘷𝘪𝘥𝘦𝘰 𝘢𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦 𝘪𝘯 𝘢𝘭𝘣𝘶𝘮.\n\n${data.data}`,
        event.threadID,
        event.messageID,
      );
    } catch (error) {
      api.sendMessage(`${error}`, event.threadID, event.messageID);
    }
  }
  const d1 = args[1] ? args[1].toLowerCase() : "";
  if (!d1 || !validCommands.includes(d1)) return;
  if (!event.messageReply || !event.messageReply.attachments) return;
  const attachment = event.messageReply.attachments[0].url;
  const URL = attachment;
  let query;
  switch (d1) {
    case "cartoon":
      query = "addVideo";
      break;
    case "photo":
      query = "addPhoto";
      break;
    case "lofi":
      query = "addLofi";
      break;
    case "sad":
      query = "addSad";
      break;
    case "funny":
      query = "addFunny";
      break;
    case "islamic":
      query = "addIslamic";
      break;
    case "horny":
      query = "addHorny";
      break;
    case "anime":
      query = "addAnime";
      break;
    case "love":
      query = "addLove";
      break;
    case "lyrics":
      query = "addLyrics";
      break;
    case "flower":
      query = "addFlower";
      break;
    case "photo":
      query = "addPhoto";
      break;
    case "sigma":
      query = "addSigma";
      break;
    case "aesthetic":
      query = "addAesthetic";
      break;
    case "cat":
      query = "addCat";
      break;
    case "ff":
      query = "addFf";
      break;
    case "sex":
      query = "addSex";
      break;
    case "football":
      query = "addFootball";
      break;
    case "girl":
      query = "addGirl";
      break;
    case "friend":
      query = "addFriend";
      break;
    case "cricket":
      query = "addCricket";
      break;
    default:
      break;
  }
  try {
    const response = await axios.get(
      `${await baseApiUrl()}/drive?url=${encodeURIComponent(URL)}`,
    );
    const imgurLink = response.data.fileUrl;
    const fileExtension = ".mp4" //path.extname(imgurLink);
    let query2;
    if (
      fileExtension === ".jpg" ||
      fileExtension === ".jpeg" ||
      fileExtension === ".png"
    ) {
      query2 = "addPhoto";
    } else if (fileExtension === ".mp4") {
      query2 = query;
    } else {
      api.sendMessage("Invalid file format.", event.threadID, event.messageID);
      return;
    }
    const svRes = await axios.get(
      `${await baseApiUrl()}/album?add=${query2}&url=${imgurLink}`,
    );
    const data = svRes.data;
    //   console.log(data);
    api.sendMessage(
      `✅ | ${data.data}\n\n🔰 | ${data.data2}\n🔥 | URL: ${imgurLink}`,
      event.threadID,
      event.messageID,
    );
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage(
      `Failed to convert image.\n${error}`,
      event.threadID,
      event.messageID,
    );
  }
};
module.exports.handleReply = async function ({ api, event, handleReply }) {
  api.unsendMessage(handleReply.messageID);
  const admin = "100032407831557";
  if (event.type == "message_reply") {
    const reply = parseInt(event.body);
    if (isNaN(reply)) {
      return api.sendMessage(
        "1 থেকে ১৩ এর মধ্যে সংখ্যা রিপ্লে কর হালারপুত😒",
        event.threadID,
        event.messageID,
      );
    }
    let query;
    let cp;
    if (reply === 1) {
      query = "funny";
      cp = "[😂] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘧𝘶𝘯𝘯𝘺 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 2) {
      query = "islamic";
      cp = "[🌙] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘐𝘴𝘭𝘢𝘮𝘪𝘤 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 3) {
      query = "sad";
      cp = "[🥺] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘴𝘢𝘥 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 4) {
      query = "anime";
      cp = "[🦹] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘢𝘯𝘪𝘮𝘦 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 5) {
      query = "video";
      cp = "[👾] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘤𝘢𝘳𝘵𝘰𝘰𝘯 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 6) {
      query = "lofi";
      cp = "[🎵] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘓𝘰𝘧𝘪 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 7 && event.senderID == admin) {
      query = "horny";
      cp = "[🥵] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘏𝘰𝘳𝘯𝘺 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 7 && event.senderID !== admin) {
      return api.sendMessage(
        "হপ বেডা লুচ্চা😒 লুচ্চামি ছেড়ে দে🙂 তানভীরের মতো ভালো হয়ে যা🫦 ",
        event.threadID,
        event.messageID,
      );
    } else if (reply === 8) {
      query = "love";
      cp = "[❤️‍🩹] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘓𝘰𝘷𝘦 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 9) {
      query = "flower";
      cp = "[🌸] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘧𝘭𝘰𝘸𝘦𝘳 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 10) {
      query = "photo";
      cp = "[📸] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘳𝘢𝘯𝘥𝘰𝘮 𝘱𝘩𝘰𝘵𝘰";
    } else if (reply === 11) {
      query = "aesthetic";
      cp = "[⚜️] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘈𝘦𝘴𝘵𝘩𝘦𝘵𝘪𝘤 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 12) {
      query = "sigma";
      cp = " [🗿] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘚𝘪𝘨𝘮𝘢 𝘝𝘪𝘥𝘦𝘰";
    } else if (reply === 13) {
      query = "lyrics";
      cp = "[🎼] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘓𝘺𝘳𝘪𝘤𝘴 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 14) {
      query = "cat";
      cp = "[😸] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘤𝘢𝘵 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 15 && event.senderID === admin) {
      query = "sex";
      cp = "[💦] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘴𝘦𝘹 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 16) {
      query = "ff";
      cp = " [🎮] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘍𝘍 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 17) {
      query = "football";
      cp = "[⚽] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘍𝘰𝘰𝘵𝘣𝘢𝘭𝘭 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 18) {
      query = "girl";
      cp = "[🙋‍♀️] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘨𝘪𝘳𝘭 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 19) {
      query = "friend";
      cp = "[🤝] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘍𝘳𝘪𝘦𝘯𝘥 𝘷𝘪𝘥𝘦𝘰";
    } else if (reply === 20) {
      query = "cricket";
      cp = "[🏏] 𝘏𝘦𝘳𝘦 𝘪𝘴 𝘤𝘳𝘪𝘤𝘬𝘦𝘵 𝘷𝘪𝘥𝘦𝘰";
    }
    try {
      const res = await axios.get(`${await baseApiUrl()}/album?type=${query}`);
      const imgUrl = res.data.data;
      const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer", headers: { 'User-Agent': 'Mozilla/5.0' } });
      const ex = path.extname(imgUrl);
      const filename = __dirname + `/cache/dipto_${Date.now()}.mp4`;
      fs.writeFileSync(filename, Buffer.from(imgRes.data, "binary"));

      api.sendMessage(
        {
          body: cp,
          attachment: fs.createReadStream(filename),
        },
        event.threadID,
        () => fs.unlinkSync(filename),
        event.messageID,
      );
    } catch (error) {
      api.sendMessage(
        "An error occurred while fetching the media.",
        event.threadID,
        event.messageID,
      );
    }
  }
};
