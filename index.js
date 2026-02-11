import express from 'express';
import gadgetDetails from './data/gadget_details.js';
import aboutRouter from './routes/about.js';
import { homepageDescription } from './data/team_member_details.js';
import teamMembers from './data/team_member_details.js';
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
  res.render(path.join(__dirname, '/views/pages/index'), {
    headTitle: 'home',
  });
});

app.use('/technical', technicalRouter);
app.use('/vehicle', vehicleRouter);
app.use('/beauty', beautyRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
