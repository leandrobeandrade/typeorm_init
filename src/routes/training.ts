import { Router } from 'express';
import {getTrainings, getTraining, updateTraining, saveTraining, removeTraining, changeChoice} from '../controller/trainingController';

const trainings = Router()

trainings.get('/', getTrainings)
trainings.get('/:id', getTraining)
trainings.post('/', saveTraining)
trainings.put('/:id', updateTraining)
trainings.patch('/:id', changeChoice)
trainings.delete('/:id', removeTraining)

export default trainings