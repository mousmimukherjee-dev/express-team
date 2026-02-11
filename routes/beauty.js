import express from "express"
import * as path from "path"

const beautyRouter = express.Router()
const __dirname = path.resolve()

beautyRouter.get("/", (req, res) => {
    res.render("pages/beauty",
    {
      headTitle: "Beauty",
      
    });
  
})

beautyRouter.get("/gadgets",(req,res)=>{

  res.render("pages/gadgets", 
  {

    headTitle:"Beauty Gadgets",
  });
})

beautyRouter.get("/gadgets/style-pro-led-mask",(req,res)=>{

  res.render("pages/gadgets", 
  {

    headTitle:"Stylpro Wavelength Pro LED Mask",
  });

  
})

beautyRouter.get("/gadgets/ai-smart-hair-dryer",(req,res)=>{

  res.render("pages/gadgets", 
  {

    headTitle:"AI Smart Hair Dryer",
  });

  
})

beautyRouter.get("/gadgets/microcurrent-face-lifting-device",(req,res)=>{

  res.render("pages/gadgets", 
  {

    headTitle:"Microcurrent Face-Lifting Device",
  });

  
})

beautyRouter.get("/gadgets/foreo-bear",(req,res)=>{

  res.render("pages/gadgets", 
  {

    headTitle:"FOREO BEAR Advanced Microcurrent",
  });

  
})




export default beautyRouter;