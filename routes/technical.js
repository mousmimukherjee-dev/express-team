import express from 'express';
import * as path from 'path';
import gadgetDetails from '../data/gadget_details.js';
import { categoryDescriptions } from '../data/categories.js';

const technicalRouter = express.Router();
const __dirname = path.resolve();

technicalRouter.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/category'), {
    pageType: 'tech',
    headTitle: 'Tech',
    category: 'tech',
    categoryContent: categoryDescriptions,
    gadgetList: gadgetDetails,
  });
});

export default technicalRouter;