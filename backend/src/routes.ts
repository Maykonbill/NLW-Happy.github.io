import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagresController';


const routes = Router();
const upload = multer(uploadConfig);

// MVC
// Model - Uma entidade (dado, usuário)
// Views - Como as coisas ficam disponiveis pro Front-end
// Controllers - Onde ficam a lógica das rotas 

routes.get('/orphanages' , OrphanagesController.index);
routes.get('/orphanages/:id' , OrphanagesController.show);
routes.post('/orphanages' , upload.array('images'), OrphanagesController.create);

export default routes;