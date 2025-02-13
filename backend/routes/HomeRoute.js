import express from "express";
import { homeAnimeById, homeAnimes, homeEpisodeById, homeEpisodes, homeGenreById, homeGenres} from "../controllers/Home.js";

const router = express.Router();

router.get('/home/animes', homeAnimes);
router.get('/home/animes/:id', homeAnimeById);
router.get('/home/genres', homeGenres);
router.get('/home/genres/:id', homeGenreById);
router.get('/home/episodes', homeEpisodes);
router.get('/home/episodes/:id', homeEpisodeById);

export default router;