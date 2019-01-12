import mongoose, {Schema} from 'mongoose';

const Friend = new Schema({
  first_id: {
    type: String,
    required: [true, 'first_id is required!'],
    trim: true,
  },
  first_login: {
    type: String,
    required: [true, 'first_login is required!'],
    trim: true,
  },
  second_id: {
    type: String,
    required: [true, 'second_id is required!'],
    trim: true,
  },
  second_login: {
    type: String,
    required: [true, 'second_login is required!'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'Date is required!'],
    trim: true,
  },
});

Friend.methods = {
  toJSON() {
    return {
      _id: this._id,
      first_id: this.first_id,
      first_login: this.first_login,
      second_id: this.second_id,
      second_login: this.second_login,
      date: this.date,
    };
  }
};

export default mongoose.model('Friend', Friend);
