const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  pass: {
    type: String,
    required: true,
  },
});

userSchema.statics.findByCredentials = async (username, pass) => {
  const user = await User.findOne({ username });
  if (user && bcrypt.compare(pass, user.pass)) {
    return user;
  } else {
    throw new Error();
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;