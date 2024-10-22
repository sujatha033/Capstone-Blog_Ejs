import express, { response } from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
var posts = [];
var deletedTitle;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public")); 

// posts['title'] = postTitle;
// posts['content'] = postContent;

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.get("/home",(req,res) => {
    res.render("index.ejs");
});

app.get("/blogger",(req,res) => {
  res.render("index.ejs");
});


app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

// app.get("/view", (req, res) => {
//     res.render("view.ejs");
// });

app.post("/create",(req,res) => {
    var postTitle = req.body.postTitle;
    var postContent = req.body.postContent;
    console.log(postTitle);
    posts['title'] = postTitle;
    posts['content'] = postContent;

    var postObj = {
        "title":postTitle,
        "content":postContent
      }
      //console.log(posts.title);
    posts.push(postObj);
   // <h4 class="alert alertprimary">Success</h4>
    //console.log(posts);
    res.render("create.ejs");
   
});

app.get("/view", (req,res) => {
    //var postLength = req.body.posts.length;
    res.render("view.ejs",{"length":posts.length,"posts":posts})
});
app.get("/delete", (req, res) => {
  deletedTitle = req.body.deletedTitle;
  console.log(deletedTitle);
  app.get("/delete1", (req, res) => {

  res.render("delete1.ejs",{"length":posts.length,"deletTitle" : deletedTitle,"posts" : posts,});
   });
   res.render("delete.ejs");
  
  //res.sendStatus(200);
  //return;
});

app.listen(port , () => {
    console.log(`Server listening on port ${port}.`);
});