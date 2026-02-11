import express from 'express';
import * as path from 'path';

const technicalRouter = express.Router();
const __dirname = path.resolve();

technicalRouter.get('/', (req, res) => {
  const allItems = req.app.locals.gadgetDetails;
  const filteredItems = allItems.filter((item) => {
    return item.category === 'technical';
  });
  res.render(path.join(__dirname, '/views/pages/category'), {
    headTitle: 'technical',
    items: filteredItems,
    category: 'technical',
  });
});

export default technicalRouter;
