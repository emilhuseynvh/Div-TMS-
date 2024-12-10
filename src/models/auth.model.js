const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) next();

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = model('User', userSchema);

module.exports = User;
