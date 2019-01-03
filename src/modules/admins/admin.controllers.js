import Admin from './admin.model';
import Alien from "../aliens/alien.model";

export async function signUp(req, res) {

  try {
    const admin = await Admin.create(req.body);
    return res.status(201).json(admin);
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
    const admin = await Admin.findOne({_id: req.params.id});
    return res.status(201).json(admin);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function createAlien(req, res) {

  try {
    const alien = await Alien.create(req.body);
    return res.status(201).json(alien);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function showAlien(req, res) {
  try {

    const alien = await Alien.findOne({_id: req.params.id});

    if (!alien)
      return res.send('Alien not found');
    else
      return res.status(201).json(alien);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function deleteAlien(req, res) {
  try {
    Alien.deleteOne({_id: req.params.id}, function (err) {
      if (err) res.status(500).json(e);

      return res.send("Alien deleted from data base ! id: " + req.params.id);
    });
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function modifyAlien(req, res) {
  try {
    await Alien.findOneAndUpdate(
      req.params.id,
      {$set: req.body},
      {new: true},
      (err, alien) => {
        if (err) return res.send("Failed to modify alien");
        res.status(200).json(alien);

      }
    );

  } catch (e) {
    return res.status(500).json(e);
  }
}

function transformFilterObject(object) {
  if (!object)
    throw "The object cannot be empty!";

  let result = {}

  for (let entry of Object.entries(object)) {
    if (entry[1].length > 0)
      result[entry[0]] = entry[1]
  }

  return result;
}

export async function filterAlien(req, res) {
  try {
    
    let transformed_filter = transformFilterObject(req.body);


    let aliens = await Alien.find(transformed_filter);
    if (!aliens)
      return res.send('Error or no match!');
    else
      return res.status(201).json(aliens);

  } catch (e) {
    return res.status(500).json(e);
  }
}
