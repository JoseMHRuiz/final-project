const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipSchema = new Schema({
    tiptitle: String,
    tip: String,
    tipType: {
        type: String,
        enum: ['Food', 'Suplementation', 'Skills', 'Sleep'],
    },

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Tip = mongoose.model('tips', tipSchema);
module.exports = Tip;