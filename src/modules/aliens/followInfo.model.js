import mongoose, {Schema} from 'mongoose';

const FollowInfo = new Schema({
  follower_id: {
    type: String,
    required: [true, 'follower_id is required!'],
    trim: true,
  },
  follower_login: {
    type: String,
    required: [true, 'follower_login is required!'],
    trim: true,
  },
  followee_id: {
    type: String,
    required: [true, 'followee_id is required!'],
    trim: true,
  },
  followee_login: {
    type: String,
    required: [true, 'followee_login is required!'],
    trim: true,
  },
  date: {
    type: String,
    required: [true, 'Date is required!'],
    trim: true,
  },
});

FollowInfo.methods = {
  toJSON() {
    return {
      _id: this._id,
      follower_id: this.follower_id,
      follower_login: this.follower_login,
      followee_id: this.followee_id,
      followee_login: this.followee_login,
      date: this.date,
    };
  }
};

export default mongoose.model('FollowInfo', FollowInfo);
