import {Router} from 'express';
import * as adminController from './admin.controllers';

const routes = new Router();

routes.post('/alien/create', adminController.createAlien);
routes.delete('/alien/delete/:id', adminController.deleteAlien);
routes.post('/alien/modify/:id', adminController.modifyAlien);
routes.get('/alien/show/:id', adminController.showAlien);
routes.post('/alien/filter', adminController.filterAlien);


export default routes;
