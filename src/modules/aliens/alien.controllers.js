import Alien from './alien.model';

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
      req.user._id,
      {$set: req.body},
      {new: true},
      (err, alien) => {
        if (err) return res.send("Failed to modify alien");
        res.status(200).json(alien);

      }
    );

    return res.status(201).send(req.user);

  } catch (e) {
    return res.status(500).json(e);
  }
}
