
const Article=require("../model/article.model.js");

function getAllArticles(req,res){
  Article.find({},function(err,data){
    if(err){
      res.status(400).json({
        'err':err
      });
    }
    else{
      res.status(200).send(data);
    }
  });
}

function getOneArticle(req,res){
  let param=req.params.title;
  console.log(param);
  Article.find({title:param},function(err,data){
    if(err){
      res.status(400).send(err);
    }
    else{
      res.status(200).send(data);
    }
  });
}

function postArticle(req,res){
  let data=req.body;
  if(!data.title && !data.content){
    res.status(400).json({
      'err':'Enter valid data'
    });
  }
  else{
    const newArticle=new Article(data);
    newArticle.save(function(err){
      if(!err)
      res.send("success");
      else res.send(err);
    })
  }
}

function deleteArticles(req,res){
  Article.deleteMany({},function(err){
    if(err)res.send(err);
    else res.send("successfully deleted");
  });
}

function putArticle(req,res){
  let param=req.params;
  Article.updateOne(
    {title:param.title},
    {title:req.body.title,content:req.body.content},
    //{overwrite:true},
    function(err){
      if(err)console.log(err);
      else res.send("successfully updated");
    }
  )
}

function patchArticle(req,res){
  console.log(req.params,req.body)
  Article.updateOne(
    {title:req.params.title},
    {$set:req.body},
    function(err){
      if(err)
      res.send(err);
      else res.send("succesfull patch");
    }
  )
}

function deleteOneArticle(req,res){
  Article.deleteOne({title:req.params.title},function(err){
    if(err)res.send(err);
    else res.send("successfully deleted");
  })
}

module.exports={
  getAllArticles,
  postArticle,
  deleteArticles,
  getOneArticle,
  putArticle,
  patchArticle,
  deleteOneArticle,
}
