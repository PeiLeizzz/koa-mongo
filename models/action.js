const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 用户数据模型
const actionSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    point: { type: String, required: true, default: '无' },
    info: { type: String, required: true, default: '无' },
    logo: { type: String, required: true, default: '...' },
    video: { type: String, required: true, default: '...' }
});

module.exports = mongoose.model('action', actionSchema);