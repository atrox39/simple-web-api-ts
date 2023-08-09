import { Router } from 'express';

const route = Router();

route.get('/', (_, res) => res.status(200).json({
  name: 'status',
  code: 200,
}));

export default route;
