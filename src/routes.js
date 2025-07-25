import express from 'express';
import { createUser, getAllUsers, deletUser } from './controllers/userController.js';

const router = express.Router();

router.post('/cadastro', createUser);
router.get('/todos', getAllUsers);
router.delete('/deletar/:id', deletUser);

export default router;