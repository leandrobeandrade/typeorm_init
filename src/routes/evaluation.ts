import {Router} from 'express';
import {getEvaluations, getEvaluation, saveEvaluation, updateEvaluation, removeEvaluation, getCategories} from '../controller/evaluationController';

const evaluations = Router()

evaluations.get('/', getEvaluations)
evaluations.get('/:id', getEvaluation)
//evaluations.get('/:category', getCategories)      Utilizando um repositório customizado
evaluations.put('/:id', updateEvaluation)
evaluations.post('/', saveEvaluation)
evaluations.delete('/:id', removeEvaluation)

export default evaluations