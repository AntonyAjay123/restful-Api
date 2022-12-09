const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});
//mongoose.set('strictQuery', true);

const wikiSchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  }
});

const Article= mongoose.model("Article",wikiSchema);
module.exports=Article;
