import { Router as createRouter } from 'express'; // Le cambiamos de nombre al router porque Eslint nos recomendaba de no llamar a una función con la primer letra mayúscula.
import {
  create,
  getAll,
  getById,
  remove,
  search,
  update,
} from '../controller/notes.controller.js';

export const notesRouter = createRouter();

notesRouter.get('/', getAll);

notesRouter.get('/search', search);

notesRouter.get('/:id', getById);

notesRouter.post('/', create);

notesRouter.patch('/:id', update);

notesRouter.delete('/:id', remove);
