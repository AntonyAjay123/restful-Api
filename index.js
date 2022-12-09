const express= require("express");
const Article=require("./model/article.model.js");
const _=require("lodash");
const articleController=require("./controllers/article.controller.js");
const articleRouter=require("./routes/article.router.js");
const app=express();
app.use(express.json());

app.use("/articles",articleRouter);
app.listen(3000,()=>{
  console.log("Server started on port 3000");
})
