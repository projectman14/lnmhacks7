import express from 'express'
import { raiseQuery } from "../controllers/raiseQuery.js";

const router = express.Router()

router
    .post('/raiseQuery', raiseQuery)

export default router;