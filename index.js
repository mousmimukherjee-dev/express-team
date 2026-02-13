import express from 'express';
import aboutRouter from './routes/about.js';
import technicalRouter from './routes/technical.js';
import vehicleRouter from './routes/vehicle.js';
import beautyRouter from './routes/beauty.js';
import * as path from 'path';
import 'dotenv/config';
import { homepageDescription } from './data/homepage.js';
import { categoryDescriptions } from './data/categories.js';
import gadgetDetails from './data/gadget_details.js';

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/home'), {
    pageType: 'home',
    headTitle: 'home',
    homepageContent: homepageDescription,
    categoryContent: categoryDescriptions,
    gadgetList: gadgetDetails,
  });
});

app.use('/tech', technicalRouter);
app.use('/vehicle', vehicleRouter);
app.use('/beauty', beautyRouter);
app.use('/about', aboutRouter);

app.get('/:category/:slug', (req, res) => {
  const {category, slug} = req.params;
  const gadget = gadgetDetails.find(gadget => gadget.category && gadget.slug === slug);
  if(!gadget) {
    return res.status(404).send('Page not found');

  }
  res.render('pages/gadgets', {
    pageType: 'gadget',
    headTitle: gadget.title,
    homepageContent: homepageDescription,
    categoryContent: categoryDescriptions,
    gadget,
    gadgetList: gadgetDetails,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));