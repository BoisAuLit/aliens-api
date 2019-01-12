import mongoose, {Schema} from 'mongoose';

const Request = new Schema({
  sender_id: {
    type: String,
    required: [true, 'sender_id is required!'],
    trim: true,
  },
  sender_login: {
    type: String,
    required: [true, 'sender_login is required!'],
    trim: true,
  },
  sendee_id: {
    type: String,
    required: [true, 'sendee_id is required!'],
    trim: true,
  },
  sendee_login: {
    type: String,
    required: [true, 'sendee_login is required!'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'Date is required!'],
    trim: true,
  },
});

Request.methods = {
  toJSON() {
    return {
      _id: this._id,
      sender_id: this.sender_id,
      sender_login: this.sender_login,
      sendee_id: this.sendee_id,
      sendee_login: this.sendee_login,
      date: this.date,
    };
  }
};

export default mongoose.model('Request', Request);
