import express from 'express';
import * as path from 'path';

const vehicleRouter = express.Router();
const __dirname = path.resolve();

vehicleRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;
  const filteredItems = allItems.filter((item) => {
    return item.category === 'vehicle';
  });

  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'Vehicle',
    items: filteredItems,
    category: 'Vehicle',
  });
});

export default vehicleRouter;
