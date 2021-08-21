const { Schema, model } = require('mongoose');

const guildSettingSchema = new Schema({
    gid: { type: String },
    level: { type: Boolean, default: false },
    levelChannel: { type: String, default: 'none' },
    music: { type: Boolean, default: true },
    log: { type: Boolean, default: false },
    logChannel: { type: String, default: 'none' },
    image: { type: Boolean, default: true },
    chatbot: { type: Boolean, default: false },
    chatbotChannel: { type: String, default: 'none' },
    welcome: { type: Boolean, default: false },
    welcomeChannel: { type: String, default: 'none' },
    goodbye: { type: Boolean, default: false },
    goodbyeChannel: { type: String, default: 'none' },
});

module.exports = model("guild_settings", guildSettingSchema);