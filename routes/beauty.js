import express from "express"
import * as path from "path";
import gadgetDetails from "../data/gadget_details.js";

const beautyRouter = express.Router();
const __dirname = path.resolve();

const beautyItems = gadgetDetails.filter(
    item => item.category === "beauty"
  );

beautyRouter.get("/", (req, res) => {

  

  res.render("pages/gadgets", {
    
    items: beautyItems,
    sidebarItems: beautyItems,
    description: "Welcome to beauty page",
    category:"Beauty",
    headTitle:"Beauty"
  });
  
});


beautyRouter.get("/gadgets/:gadgetSlug",(req,res)=>{

  let{gadgetSlug}=req.params;

  const gadget = gadgetDetails.find(g=> g.slug === gadgetSlug);

  if(!gadget){

    return res.status(404).send("Gadget Not Found")
  }

  res.render("pages/gadgets",{

    headTitle:gadget.title,
    description:gadget.description,
    sidebarItems: beautyItems
  });
  
});


export default beautyRouter;