import express from 'express'
import { createInsumo, deleteInsumo, getAllInsumos, getInsumo, updateInsumo } from '../controllers/controller';
const router = express.Router();

router.get('/', getAllInsumos)
router.get('/:id', getInsumo)
router.post('/',createInsumo)
router.put('/:id', updateInsumo)
router.delete('/:id',deleteInsumo)

export default router