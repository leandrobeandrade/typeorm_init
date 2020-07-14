import { Router } from 'express';

import Evaluations from './evaluation';
import Trainings from './training';

const routes = Router()

routes.use('/evaluations', Evaluations)
routes.use('/trainings', Trainings)

export default routes