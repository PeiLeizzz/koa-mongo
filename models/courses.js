const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, default: 'ZZKF' + Date.now() },
    length: { type: Number, required: true},
    actions: [
        {
            id: { type: String, required: true },
            length: { type: Number, required: true },
            now: { type: Number, required: true, default: 0 } 
        }
        
    ],
    logo:{ type: String, required: true },
    info:{ type: String, required: true }
});

module.exports = mongoose.model('courses', courseSchema);