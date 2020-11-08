const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 用户数据模型
const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, default: 'ZZKF' + Date.now() },
    date: { type: String, required: true, default: new Date().toLocaleDateString() },
    planTable: [
        [
            {
                id: { type: String, required: true },
                length: { type: Number, required: true },
                now: { type: Number, required: true, default: 0 } 
            }
        ]
    ]
});

module.exports = mongoose.model('users', userSchema);