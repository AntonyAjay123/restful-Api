const express= require("express");
const Article=require("./model/article.model.js");
const _=require("lodash");
const articleController=require("./controllers/article.controller.js");
const app=express();
app.use(express.json());

app.get("/articles",articleController.getAllArticles);
app.post("/articles",articleController.postArticle);
app.delete("/articles",articleController.deleteArticles);
app.get("/articles/:title",articleController.getOneArticle);
app.put("/articles/:title",articleController.putArticle);
app.patch("/articles/:title",articleController.patchArticle);
app.delete("/articles/:title",articleController.deleteOneArticle);

app.listen(3000,()=>{
  console.log("Server started on port 3000");
})
