import express from "express";
import { getEpisodes, createEpisode, getEpisodeById, updateEpisode, deleteEpisode} from "../controllers/Episodes.js";
import { verifyUser } from "../middleware/AuthUser.js";


const router = express.Router();

router.get('/episodes', verifyUser, getEpisodes);
router.get('/episodes/:id', verifyUser, getEpisodeById);
router.post('/episodes', verifyUser, createEpisode);
router.patch('/episodes/:id', verifyUser, updateEpisode);
router.delete('/episodes/:id', verifyUser, deleteEpisode);


export default router;