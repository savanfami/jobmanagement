import { Router } from 'express'
import { createJobPostController } from '../controllers/createJobController.js'

const router=Router()


router.route('/jobs').post(createJobPostController)

export default router