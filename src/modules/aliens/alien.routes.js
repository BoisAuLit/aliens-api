/**
 * Defining routes for all users
 */
import {Router} from 'express';

import validate from 'express-validation';

import {authLocalAliens} from '../../services/auth.services.alien';
import * as alienController from './alien.controllers';
import alienValidation from './alien.validation'

const routes = new Router();

routes.post('/signup', validate(alienValidation.signup), alienController.signUp);
routes.post('/login', authLocalAliens, alienController.login);

export default routes;
