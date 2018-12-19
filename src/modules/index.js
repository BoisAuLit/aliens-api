import userRoutes from './users/user.routes';
import alienRoutes from './aliens/alien.routes';
import {authJwt} from '../services/auth.services';

export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/aliens', alienRoutes);
  app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!!!');
  });
}
