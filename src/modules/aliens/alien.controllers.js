import Alien from './alien.model';
import FollowInfo from './followInfo.model';
import Request from './request.model';
import Friend from './friend.model';

export async function signUp(req, res) {

  try {
    const alien = await Alien.create(req.body);
    return res.status(201).json(alien);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export function login(req, res, next) {

  res.status(200).json(req.user);

  return next();
}

export async function getAlienAdmin(req, res) {
  try {
    const alien = await Alien.findOne({_id: req.params.id});
    return res.status(201).json(alien);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function showAlienInfo(req, res) {
  try {
    return res.status(201).send(req.user);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function modifyAlienInfo(req, res) {
  try {
    await Alien.findOneAndUpdate(
      {_id: req.user._id},
      {$set: req.body},
      {new: true},
      (err, alien) => {
        if (err) return res.send("Failed to modify alien");
        return res.status(200).json(alien);
      }
    );
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function followAnotherAlien(req, res) {
  try {
    let followee = await Alien.findOne({_id: req.params.id});

    if (!followee)
      return res.send("The followee's id is not found");
    if (req.user._id.equals(followee._id))
      return res.send("Follower & followee cannot be the same!")

    // Check that if the follow info exists already
    let followInfo = await FollowInfo.findOne({
      follower_id: req.user._id,
      followee_id: followee._id,
    });
    if (followInfo)
      return res.status(500).send("This follow info exists already!");

    await FollowInfo.create({
      follower_id: req.user._id,
      follower_login: req.user.login,
      followee_id: followee._id,
      followee_login: followee.login,
      date: new Date().toISOString()
    }, (err, newFollowInfo) => {
      if (err)
        return res.status(500).send(err);
      return res.status(200).json(newFollowInfo);
    });

  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function unFollowAnotherAlien(req, res) {
  try {
    await FollowInfo.remove(
      {
        follower_id: req.user._id,
        followee_id: req.params.id
      }, (err, _) => {
        if (err)
          return res.status(500).send(err);
        return res.status(200).json("Unfollow success!");
      });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function showFriendRequests(req, res) {
  try {

    console.log('=====================================');
    console.log("The request user id is: ", req.user._id);
    console.log("The request user lo is: ", req.user.login);
    console.log('=====================================');

    let requests = await Request.find({sendee_id: req.user._id});

    if (!requests.length)
      return res.status(500).send('No friend requests found for this user');

    return res.status(200).json(requests);
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function sendFriendRequest(req, res) {
  try {

    let sendee = await Alien.findOne({_id: req.params.id});
    if (!sendee)
      return res.status(500).send('Sendee not found in the database!');

    // Check that if the friend request already exists
    let request = await Request.findOne({
      sender_id: req.user._id,
      sendee_id: sendee._id,
    });

    if (request)
      return res.status(500).send("Friend request already exists, cannot resend friend request!");

    await Request.create({
      sender_id: req.user._id,
      sender_login: req.user.login,
      sendee_id: sendee._id,
      sendee_login: sendee.login,
      date: new Date().toISOString(),
    }, (err, newRequest) => {
      if (err)
        return res.status(500).send(err);
      return res.status(200).json(newRequest);
    });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function acceptFriendRequest(req, res) {
  try {


    let requester = await Alien.findOne({_id: req.params.id});
    if (!requester)
      return res.status(500).send("Requester not found in the database");

    // Step 1: remove a document from the "requests" collection
    await Request.deleteOne({
      sender_id: requester._id,
      sendee_id: req.user._id
    }, err => {
      if (err)
        return res.status(500).send(err);
    });

    const right_now = new Date().toISOString();

    // Step 2: add two documents to the "friends" collection
    const arr = [
      {
        first_id: req.user._id,
        first_login: req.user.login,
        second_id: requester._id,
        second_login: requester.login,
        date: right_now
      },
      {
        first_id: requester._id,
        first_login: requester.login,
        second_id: req.user._id,
        second_login: req.user.login,
        date: right_now
      }
    ];

    const frindships = [];

    let friendShip1 = await Friend.findOne({
      first_id: req.user._id,
      second_id: requester._id
    });

    let friendShip2 = await Friend.findOne({
      first_id: requester._id,
      second_id: req.user._id
    });

    if (!friendShip1) {
      // Create the first friendship document
      await Friend.create(arr[0], (err, friendship) => {
        if (err)
          return res.status(500).send(err);
        frindships.push(friendship);
      });
    } else {
      frindships.push(friendShip1);
    }

    if (!friendShip2) {
      // Create the second friendship document
      await Friend.create(arr[1], (err, _) => {
        if (err)
          return res.status(500).send(err);
        frindships.push(frindships);
      });
    } else {
      frindships.push(friendShip2);
    }

    console.log('=====================================');
    console.log("The freindships are: ", frindships);
    console.log('=====================================');


    return res.status(200).send("Accepted friend request successfully!");
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function breakupWithAnotherAlien(req, res) {
  try {

    // Make sure that the alien that we want to break up with exists
    let alien = await Alien.findOne({_id: req.params.id});
    if (!alien)
      return res.status(500).send("The alien that you want to break up with doesn't even exist!")

    console.log('=====================================');
    console.log("发起者   id:    ", req.user._id);
    console.log("发起者   login: ", req.user.login);
    console.log("被绝交者 id:    ", alien._id);
    console.log("被绝交者 login: ", alien.login);

    console.log('=====================================');


    const friendships = [
      {
        first_id: req.user._id,
        second_id: alien._id
      },
      {
        first_id: alien._id,
        second_id: req.user._id
      }
    ];

    for (let f of friendships) {
      await Friend.deleteOne(f, (err) => {
        if (err)
          res.status(500).send('Failed to break up!')
      });
    }

    return res.send('Successfully break up with the alien, now you are not friends anymore!');
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function showFollowers(req, res) {
  try {

    let followers = await FollowInfo.find({followee_id: req.user._id});

    if (!followers.length)
      return res.status(500).send("No followers found for this alien.")

    followers = followers.map(followInfo => {
      let result = {};
      result.follower_id = followInfo.follower_id;
      result.follower_login = followInfo.follower_login;
      return result;
    });

    return res.status(200).send(followers);

  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function showFollowings(req, res) {
  try {

    console.log('=====================================');
    console.log("Show following for this user: ", req.user);
    console.log('=====================================');

    let followings = await FollowInfo.find({follower_id: req.user._id});
    if (!followings.length)
      return res.status(500).send("No followings info found for this alien");

    followings = followings.map(followInfo => {
      let result = {};
      result.followee_id = followInfo.followee_id;
      result.followee_login = followInfo.followee_login;
      return result;
    });


    return res.status(200).json(followings);
  } catch (e) {
    return res.status(500).send(e);
  }
}
