import express from 'express';

export const router = express.Router();

// importing the controller
import { homeController } from '../controllers/homeController.js'

router.get('/', homeController);

