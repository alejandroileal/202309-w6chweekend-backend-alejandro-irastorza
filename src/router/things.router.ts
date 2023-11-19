import { Router as createRouter } from 'express';
import {
  getAll,
  getById,
  remove,
  create,
  update,
} from '../controller/things.controller.js';

export const thingsRouter = createRouter();

thingsRouter.get('/', getAll);
thingsRouter.get('/:idThing', getById);
thingsRouter.delete('/:idThing', remove);
thingsRouter.post('/', create);
thingsRouter.patch('/:idThing', update);
