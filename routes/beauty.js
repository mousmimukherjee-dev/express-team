import express from 'express';
import * as path from 'path';
import categoryPageDescription from '../data/category_descriptions.js';

const beautyRouter = express.Router();
const __dirname = path.resolve();

beautyRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;
  const filteredItems = allItems.filter((item) => {
    return item.category === 'beauty';
  });
  const categoryHeroPage = categoryPageDescription.find(
    (el) => el.category === 'vehicle',
  );

  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'Beauty',
    items: filteredItems,
    category: 'beauty',
    gadgetDetails: allItems,
    categoryHeroPage,
  });
});

beautyRouter.get('/:urlItem', (req, res) => {
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
      el.category.toLowerCase() === 'beauty' &&
      formatTitle(el.title) === urlTitle,
  );

  if (!item) return res.status(404).send('Item not found');

  res.render(path.join(__dirname, '/views/pages/itemCategory'), {
    headTitle: item.title,
    category: 'beauty',
    gadgetDetails: allItems,
    item,
  });
});

export default beautyRouter;
