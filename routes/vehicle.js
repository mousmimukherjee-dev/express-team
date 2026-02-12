import express from 'express';
import * as path from 'path';

const vehicleRouter = express.Router();
const __dirname = path.resolve();

vehicleRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;

  const filteredItems = allItems.filter(
    (item) => item.category.toLowerCase() === 'vehicle',
  );

  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'Vehicle',
    items: filteredItems,
    category: 'vehicle',
    gadgetDetails: allItems,
  });
});

vehicleRouter.get('/:urlItem', (req, res) => {
  const formatTitle = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '-')
      .replace(/\s+/g, '-')
      .trim();
  const urlTitle = req.params.urlItem;
  const allItems = req.app.locals.gadgetDetails;

  const item = allItems.find(
    (el) =>
      el.category.toLowerCase() === 'vehicle' &&
      formatTitle(el.title) === urlTitle,
  );

  if (!item) return res.status(404).send('Item not found');

  res.render(path.join(__dirname, '/views/pages/ItemCategory'), {
    headTitle: item.title,
    category: 'vehicle',
    gadgetDetails: allItems,
    item,
  });
});

export default vehicleRouter;
