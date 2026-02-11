import express from 'express';
import * as path from 'path';

const beautyRouter = express.Router();
const __dirname = path.resolve();

beautyRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;
  const filteredItems = allItems.filter((item) => {
    return item.category === 'beauty';
  });
  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'beauty',
    items: filteredItems,
    category: 'Beauty',
  });
});

export default beautyRouter;
