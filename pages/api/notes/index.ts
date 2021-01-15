import { NextApiRequest, NextApiResponse } from 'next';
import notes, { INote } from '../../../src/data/data';

import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res.json({ data: notes })
  })
  .post((req, res) => {
    const note: INote = {
      ...req.body,
      id: Date.now()
    }

    notes.push(note);
    res.json({ data: note })
  });

export default handler;