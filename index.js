import express from 'express';
import gadgetDetails from './data/gadget_details.js';
import aboutRouter from './routes/about.js';
import { homepageDescription } from './data/team_member_details.js';
import technicalRouter from './routes/technical.js';
import vehicleRouter from './routes/vehicle.js';
import beautyRouter from './routes/beauty.js';
import * as path from 'path';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.locals.gadgetDetails = gadgetDetails;

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/home'), {
    headTitle: 'Home page',
    homepageContent: homepageDescription,
  });
});

app.use('/technical', technicalRouter);
app.use('/vehicle', vehicleRouter);
app.use('/beauty', beautyRouter);
app.use('/about', aboutRouter);

app.get('/:urlItem1', (req, res) => {
  const formatTitle = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '-')
      .replace(/\s+/g, '-')
      .trim();

  const urlTitle1 = req.params.urlItem1;

  const item = req.app.locals.gadgetDetails.find(
    (el) => formatTitle(el.title) === urlTitle1,
  );

  if (!item) return res.status(404).send('Item not found');

  res.render(path.join(__dirname, '/views/pages/itemHome'), {
    headTitle: item.title,
    item,
    category: item.category,
    gadgetDetails: req.app.locals.gadgetDetails,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
