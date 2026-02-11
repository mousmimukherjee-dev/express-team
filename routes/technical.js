import express from "express"
import * as path from "path"

const technicalRouter = express.Router()
const __dirname = path.resolve()

technicalRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/category"),
    {
      headTitle: "technical",
      
    }
  )
})

export default technicalRouter