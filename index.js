import express from "express"

import * as path from "path"

const app = express()
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/index"),
  {

  }

)
})

app.get("/beauty",(req,res)=>{

  res.render("pages/gadgets")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))