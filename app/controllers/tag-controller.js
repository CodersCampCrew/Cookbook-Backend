import { subscribe } from "superagent";
import Tags from "../db/models/tag.js"

class TagsController {
    async showTags(req, res) {
      const tags = await Tags.find();
      res.status(200).json(tags);
    }
    
    async addTag(req,res){
      const tags = new Tags({
        name: req.body.name
      })
      try{
        const newTag = await Tags.save()
        res.status(201).json(newTag)
      } catch (err){
        res.status(400).json({message: err.message})
      }
    }
  }

  
  export default new TagsController();