import { Router } from 'express'
import { createJobPostController } from '../controllers/createJobController.js'
import { getAllJobsController } from '../controllers/getAlljobsController.js'
const router=Router()


router.route('/jobs').post(createJobPostController).get(getAllJobsController)

export default router