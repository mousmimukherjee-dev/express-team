import express from "express"
import * as path from "path"

const beautyRouter = express.Router()
const __dirname = path.resolve()

beautyRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/category"),
    {
      headTitle: "beauty",
      
    }
  )
})

export default beautyRouter