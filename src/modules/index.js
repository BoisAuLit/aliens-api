import alienRoutes from './aliens/alien.routes';
import alienRoutesLoggedIn from './aliens/alien.routes.logged-in';
import adminRoutes from './admins/admin.routes';
import adminRoutesLoggedIn from './admins/admin.routes.logged-in';
import {authJwtAliens} from '../services/auth.services.alien';
import {authJwtAdmins} from "../services/auth.services.admin";

export default app => {

  // Routes for aliens
  app.use('/api/v1/aliens', alienRoutes);
  app.use('/api/v1/aliens-logged-in', authJwtAliens, alienRoutesLoggedIn);


  // Routes for administrators
  app.use('/api/v1/admins', adminRoutes);
  app.use('/api/v1/admins-logged-in', authJwtAdmins, adminRoutesLoggedIn);
}
