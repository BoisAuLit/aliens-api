/**
 * Defining routes for an individual
 */

import {Router} from 'express';
import * as alienController from './alien.controllers';

const routes = new Router();

routes.get('/profile', alienController.showAlienInfo);
routes.post('/profile/modify', alienController.modifyAlienInfo);

// Functionalities about followers / followees
routes.post('/follow/:id', alienController.followAnotherAlien);
routes.post('/unfollow/:id', alienController.unFollowAnotherAlien);

// Functionalities about friends
routes.get('/show-friend-requests', alienController.showFriendRequests);
routes.post('/send-friend-request/:id', alienController.sendFriendRequest);
routes.post('/accept-friend-request/:id', alienController.acceptFriendRequest);
routes.post('/breakup/:id', alienController.breakupWithAnotherAlien);

// Show followers / folling
routes.get('/show-followers', alienController.showFollowers);
routes.get('/show-followings', alienController.showFollowings);

// Show friends
//routes.get('/show-friends');


export default routes;
