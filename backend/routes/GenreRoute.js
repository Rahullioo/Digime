import express from "express";
import { createGenre, deleteGenre, getGenres, getGenreById, updateGenre } from "../controllers/Genres.js";
import { verifyUser,adminOnly } from "../middleware/AuthUser.js";


const router = express.Router();

router.get('/genres', verifyUser, getGenres);
router.get('/genres/:id', verifyUser, getGenreById);
router.post('/genres', verifyUser, adminOnly, createGenre);
router.patch('/genres/:id', verifyUser, adminOnly, updateGenre);
router.delete('/genres/:id', verifyUser, adminOnly, deleteGenre);


export default router;