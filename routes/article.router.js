const express= require("express");
const articleController=require("../controllers/article.controller.js");

const articleRouter=express.Router();

articleRouter.get("/",articleController.getAllArticles);
articleRouter.post("/",articleController.postArticle);
articleRouter.delete("/",articleController.deleteArticles);
articleRouter.get("/:title",articleController.getOneArticle);
articleRouter.put("/:title",articleController.putArticle);
articleRouter.patch("/:title",articleController.patchArticle);
articleRouter.delete("/:title",articleController.deleteOneArticle);


module.exports=articleRouter;
