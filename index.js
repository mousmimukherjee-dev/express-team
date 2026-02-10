import express from 'express';
import teamMembers from './data/team_member_details.js';
import * as path from 'path';
import 'dotenv/config';

const app = express()
const port = process.env.PORT;
const __dirname = path.resolve()

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/index"),
  {
    headTitle: "home",

  }

)
})

app.get("/beauty",(req,res)=>{

  res.render("pages/gadgets")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
