import express from 'express';
import teamMembers from './data/team_member_details.js';
import * as path from 'path';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/views/pages/index.ejs'), {});
});
app.get('/team', (req, res) => {
  res.render('team', { teamMembers });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
