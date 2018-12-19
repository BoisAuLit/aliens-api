import mongoose, {Schema} from 'mongoose';
import {hashSync, compareSync} from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import {passwordReg} from './alien.validation';
import constants from '../../config/constants';

const AlienSchema = new Schema({
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
  name: {
    type: String,
    required: [true, 'Name is required!'],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required!'],
    trim: true,
    validate: {
      validator(age) {
        return Number.isInteger(age) && age > 0;
      }
    }
  },
  race: {
    type: String,
    required: [true, 'Race is required!'],
    trim: true,
  },
  food: {
    type: String,
    required: [true, 'Food is required!'],
    trim: true,
  },

});

AlienSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

AlienSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password)
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      constants.JWT_SECRET,
    );
  },
  toJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`,
    };
  },
};

export default mongoose.model('Alien', AlienSchema);
