import express from 'express';
import * as path from 'path';
import gadgetDetails from '../data/gadget_details.js';
import { categoryDescriptions } from '../data/categories.js';

const beautyRouter = express.Router();
const __dirname = path.resolve();

beautyRouter.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/category'), {
    pageType: 'beauty',
    headTitle: 'Beauty',
    category: 'beauty',
    categoryContent: categoryDescriptions,
    gadgetList: gadgetDetails,
  });
});

export default beautyRouter;