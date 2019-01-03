/**
 * Defining routes for all users
 */
import {Router} from 'express';

import {authLocalAdmins} from '../../services/auth.services.admin';
import * as adminController from './admin.controllers';
import validate from "express-validation";
import adminValidation from "./admin.validation";


const routes = new Router();

routes.post('/signup', validate(adminValidation.signup), adminController.signUp)
routes.post('/login', authLocalAdmins, adminController.login);

export default routes;
