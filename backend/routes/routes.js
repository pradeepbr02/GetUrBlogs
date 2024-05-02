// routes.js
import express from 'express';
import { getArticle, upvoteArticle, addComment } from '../controllers/articleController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/articles/:name', authMiddleware, getArticle);
router.put('/api/articles/:name/upvote', authMiddleware, upvoteArticle);
router.post('/api/articles/:name/comment', authMiddleware, addComment);

export default router;
