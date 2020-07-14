import {getRepository} from 'typeorm';
import {NextFunction, Request, Response} from 'express';
import {Trainings} from '../models/training';

// Lista todos os treinamentos
export const getTrainings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const trainings = await getRepository(Trainings).find()
    return res.json(trainings)
  } catch(err) {
    console.log('ERROR =>', err.message)
  }
}

// Lista um treinamento
export const getTraining = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const training = await getRepository(Trainings).findOne(id)
    return res.json(training)
  } catch(err) {
    console.log('ERROR =>', err.message)
  }
}

// Insere um treinamento
export const saveTraining = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const training = await getRepository(Trainings).save(req.body)
    return res.json(training) 
  } catch (err) {
    console.log('ERROR => ', err.message)    
  }
}

// Edita um treinamento
export const updateTraining = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const training = await getRepository(Trainings).update(id, req.body)
  
    if(training.affected == 1) {
      const trainingsUpdated = await getRepository(Trainings).findOne(id)
      return res.json(trainingsUpdated)
    }

    return res.status(404).json({ message: 'Treinamento não encontrado!' })

  } catch (err) {
    console.log('ERROR => ', err.message) 
  } 
}

// Edita o campo multipla escolha
export const changeChoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const training = await getRepository(Trainings).update(id, { multiple_choice: true })
  
    if(training.affected == 1) {
      const trainingsUpdated = await getRepository(Trainings).findOne(id)
      return res.json({ message: 'Escolha modificada' })
    }
    
    return res.status(404).json({ message: 'Treinamento não encontrado!' })  

  } catch (err) {
    console.log('ERROR => ', err.message) 
  }
}

// Exclui um treinamento
export const removeTraining = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
  const training = await getRepository(Trainings).delete(id)
  
  if(training.affected == 1) {
    await getRepository(Trainings).findOne(id)
    return res.json({ message: 'Treinamento removido!' })
  }

  return res.status(404).json({ message: 'Treinamento não encontrado!' }) 

  } catch (err) {
    console.log('ERROR => ', err.message) 
  } 
}