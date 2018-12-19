import {Router} from 'express';

import validate from 'express-validation';

import {authLocal} from '../../services/auth.services';
import * as userController from './alien.controllers';
import userValidation from './alien.validation'

const routes = new Router();

routes.post('/signupAlien', validate(userValidation.signupAlien), userController.signUpAlien);
routes.post('/loginAlien', authLocal, userController.login);

export default routes;
