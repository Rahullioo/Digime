import express from "express";
import {
    getAnimes,
    getAnimesById,
    createAnimes,
    updateAnimes,
    deleteAnimes,
} from "../controllers/Animes.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/animes', verifyUser, getAnimes);
router.get('/animes/:id', verifyUser, getAnimesById);
router.post('/animes', verifyUser, createAnimes);
router.patch('/animes/:id', verifyUser, updateAnimes);
router.delete('/animes/:id', verifyUser, deleteAnimes);

export default router;