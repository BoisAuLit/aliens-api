import Alien from './alien.model';

export async function signUpAlien(req, res) {

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
