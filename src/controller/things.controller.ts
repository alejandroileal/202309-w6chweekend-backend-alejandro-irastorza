import { Request, Response } from 'express';
import { Thing } from '../model/thing';

const data: Thing[] = [
  { id: 0, thing: 'Express' },
  { id: 1, thing: 'Node' },
];

export const getAll = (req: Request, res: Response) => {
  res.json(data);
};

export const getById = (req: Request, res: Response) => {
  const result = data.find((item) => item.id === Number(req.params.idThing));
  res.json(result);
};

export const remove = (req: Request, res: Response) => {
  data.splice(
    data.findIndex((item) => item.id === Number(req.params.idThing)),
    1
  );
  res.send({});
};

export const create = (req: Request, res: Response) => {
  const result = { ...req.body, id: data.length };
  data.push(result);
  res.json(result);
};

export const update = (req: Request, res: Response) => {
  const index = data.findIndex(
    (item) => item.id === Number(req.params.idThing)
  );
  data[index] = {
    id: Number(req.params.idThing),
    ...req.body,
  };

  res.json(data[index]);
};
