/**
 * Defining routes for an individual
 */

import {Router} from 'express';
import * as alienController from './alien.controllers';

const routes = new Router();

routes.get('/profile', alienController.showAlienInfo);
routes.post('/profile/modify', alienController.modifyAlienInfo)

export default routes;
