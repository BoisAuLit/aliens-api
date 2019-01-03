import mongoose, {Schema} from 'mongoose';
import {hashSync, compareSync} from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import {passwordReg} from './admin.validation';
import constants from '../../config/constants';

const AdminSchema = new Schema({
  login: {
    type: String,
    required: [true, 'Login is required!'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!',
    },
  },
});

AdminSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

AdminSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateAdmin(password) {
    return compareSync(password, this.password)
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
        type: 'admin'
      },
      constants.JWT_SECRET,
    );
  },
  toJSON() {

    return {
      _id: this._id,
      login: this.login,
      token: `JWT ${this.createToken()}`,
    };
  },
};

export default mongoose.model('Admin', AdminSchema);


