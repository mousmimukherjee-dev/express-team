import express from "express"
import * as path from "path"

const vehicleRouter = express.Router()
const __dirname = path.resolve()

vehicleRouter.get("/", (req, res) => {
    res.render(path.join(__dirname, "/views/pages/category"),
    {
      headTitle: "vehicle",
      
    }
  )
})

export default vehicleRouter