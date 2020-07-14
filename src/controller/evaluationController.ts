import {getRepository, getCustomRepository} from 'typeorm';
import {NextFunction, Request, Response} from 'express';
import {Evaluations} from '../models/evaluation';
import FindByCategory from '../repositories/FindByCategory';
import { validate } from 'class-validator';
import evaluations from '../routes/evaluation';

// Lista todas as avaliações
export const getEvaluations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const evaluations = await getRepository(Evaluations).find()
    return res.json(evaluations)
  } catch(err) {
    console.log(err.message)
  }
}

// Lista uma avaliação
export const getEvaluation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const evaluation = await getRepository(Evaluations).findOne(id)
    return res.json(evaluation)
  } catch(err) {
    console.log(err.message)
  }
}

// Lista uma categoria de uma avaliação
export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params
    const categoryRepo = getCustomRepository(FindByCategory)
    const categories = await categoryRepo.getCategory(category)
    return res.json(categories)
  } catch (err) {
    console.log('ERROR => ', err.message)
  }
}

// Insere uma avaliação
export const saveEvaluation = async (req: Request, res: Response, next: NextFunction) => {
  // Sem validador
  /* try {
    const evaluation = await getRepository(Evaluations).save(req.body)
    return res.json(evaluation)
  } catch(err) {
    console.log(err.message)
  }  */

  // Com validador
  try {
    const evaluationRepo = getRepository(Evaluations)
    const { description, level, workload, category, validity, training_objective } = req.body
    const evaluation = evaluationRepo.create({ 
      description, level, workload, category, validity, training_objective
    })
    const errors = await validate(evaluation)

    if(errors.length == 0) {
      const _response = await evaluationRepo.save(evaluation)
      return res.status(201).json(_response)
    }
    return res.status(400).json(errors)
  } catch(err) {
    console.log(err.message)
  }
}

// Edita uma avaliação
export const updateEvaluation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const evaluation = await getRepository(Evaluations).update(id, req.body)
  
    if(evaluation.affected == 1) {
      const evaluationUpdated = await getRepository(Evaluations).findOne(id)
      return res.json(evaluationUpdated)
    }

    return res.status(404).json({ message: 'Avaliação não encontrada!' }) 
  
  } catch(err) {
    console.log(err.message)
  }
}

// Exclui uma avaliação
export const removeEvaluation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const evaluation = await getRepository(Evaluations).delete(id)
  
    if(evaluation.affected == 1) {
      await getRepository(Evaluations).findOne(id)
      return res.json({ message: 'Avaliação removida!' })
    }

    return res.status(404).json({ message: 'Avaliação não encontrada!' }) 

  } catch(err) {
    console.log(err.message)
  }
}