import passport from 'passport';
import LocalStrategy from 'passport-local';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';

import Alien from '../modules/aliens/alien.model';
import constants from '../config/constants';

// Local strategy
const localOpts = {
  usernameField: 'login',
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (login, password, done) => {
    try {
      const alien = await Alien.findOne({login});
      if (!alien) {
        return done(null, false);
      } else if (!alien.authenticateAlien(password)) {
        return done(null, false);
      }

      return done(null, alien);
    } catch (e) {
      return done(e, false);
    }
  },
);

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {
    const alien = await Alien.findById(payload._id);

    if (!alien) {
      return done(null, false);
    }

    return done(null, alien);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocalAliens = passport.authenticate('local', {session: false});
export const authJwtAliens = passport.authenticate('jwt', {session: false});
