import express from 'express';
import * as path from 'path';
import categoryPageDescription from '../data/category_descriptions.js';

const technicalRouter = express.Router();
const __dirname = path.resolve();

technicalRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;
  const filteredItems = allItems.filter((item) => {
    return item.category === 'technical';
  });
  const categoryHeroPage = categoryPageDescription.find(
    (el) => el.category === 'technical',
  );
  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'Technical',
    items: filteredItems,
    category: 'technical',
    gadgetDetails: allItems,
    categoryHeroPage,
  });
});

technicalRouter.get('/:urlItem', (req, res) => {
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
      el.category.toLowerCase() === 'technical' &&
      formatTitle(el.title) === urlTitle,
  );

  if (!item) return res.status(404).send('Item not found');

  res.render(path.join(__dirname, '/views/pages/itemCategory'), {
    headTitle: item.title,
    category: 'technical',
    gadgetDetails: allItems,
    item,
  });
});

export default technicalRouter;
