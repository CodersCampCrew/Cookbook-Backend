import express from 'express';
const router = new express.Router();
import TagsController from "../controllers/tag-controller.js"

router.get('/tags', TagsController.showTags);
router.post('/tags/add', TagsController.addTag);

export default router;
