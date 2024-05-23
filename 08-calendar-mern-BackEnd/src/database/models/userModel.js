const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 3,
  },
});

module.exports = model('User', userSchema);
