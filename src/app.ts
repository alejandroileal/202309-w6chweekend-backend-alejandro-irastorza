import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { thingsRouter } from './router/things.router.js';

// Lo que estamos viendo es una app montada con express, se utiliza para tener cadenas de middleware y gestionar las peticiones de GET, POST, PATCH y DELETE. Debemos verlo como un enrutador para regresar algo dependiendo de la petición.

// Esta app es una capa que está conectada a otra capa en donde están los puertos.

export const app = express();

app.use(cors()); // La ejecuto para que me devuelva el midleware. La pongo primero porque quiero que antes de las peticiones esté abierto corse.

app.use(morgan('dev'));

// Estos middlewares comprueban, antes de ver la ruta, si existe en la ruta, por ejemplo, puede valernos para poner un favicon o un fichero html.

app.use(express.json()); // Nos parsea lo que recibimos en el request a formato JSON
app.use(express.static('public'));

app.use('/things', thingsRouter);

app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log('Hola desde express');
});
