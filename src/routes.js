import {Router} from 'express';
import { libros } from "./controller.js";

export const router = Router()

router.get('/libros', libros.getAll);
router.post('/libros', libros.add);
router.delete('/libros', personas.delete);
router.put('/libros', libros.update);
router.get("/libros/:id", libro.getOne);