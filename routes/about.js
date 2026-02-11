import express from 'express';
import * as path from 'path';
import { teamMembers } from '../data/team_member_details.js';
import { teamDescription } from '../data/team_member_details.js';

const aboutRouter = express.Router();
const __dirname = path.resolve();

aboutRouter.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/pages/about'),
    {
      headTitle: 'About Us',
      teamList: teamMembers,
      aboutTeam: teamDescription,
    }
  );
});

export default aboutRouter;