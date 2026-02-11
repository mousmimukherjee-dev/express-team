import express from "express"
import * as path from "path";
import gadgetDetails from "../data/gadget_details.js";

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


beautyRouter.get("/gadgets/:gadgetSlug",(req,res)=>{

  let{gadgetSlug}=req.params;

  const gadget = gadgetDetails.find(g=> g.slug === gadgetSlug);

  if(!gadget){

    return res.status(404).send("Gadget Not Found")
  }

  res.render("pages/gadgets",{

    headTitle:gadget.title,
    description:gadget.description,
  });
  
});

// beautyRouter.get("/gadgets/style-pro-led-mask",(req,res)=>{

//   res.render("pages/gadgets", 
//   {

//     headTitle:"Stylpro Wavelength Pro LED Mask",
//   });

  
// })

// beautyRouter.get("/gadgets/ai-smart-hair-dryer",(req,res)=>{

//   res.render("pages/gadgets", 
//   {

//     headTitle:"AI Smart Hair Dryer",
//   });

  
// })

// beautyRouter.get("/gadgets/microcurrent-face-lifting-device",(req,res)=>{

//   res.render("pages/gadgets", 
//   {

//     headTitle:"Microcurrent Face-Lifting Device",
//   });

  
// })

// beautyRouter.get("/gadgets/foreo-bear",(req,res)=>{

//   res.render("pages/gadgets", 
//   {

//     headTitle:"FOREO BEARAdvanced Microcurrent",
//   });

  
// })




export default beautyRouter;