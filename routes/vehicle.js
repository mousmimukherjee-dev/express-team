import express from 'express';
import * as path from 'path';
import gadgetDetails from '../data/gadget_details.js';
import { categoryDescriptions } from '../data/categories.js';

const vehicleRouter = express.Router();
const __dirname = path.resolve();

vehicleRouter.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/category'), {
    pageType: 'vehicle',
    headTitle: 'Vehicle',
    category: 'Vehicle',
    categoryContent: categoryDescriptions,
    gadgetList: gadgetDetails,
  });
});

export default vehicleRouter;