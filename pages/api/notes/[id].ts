import { NextApiRequest, NextApiResponse } from 'next';

import nc from 'next-connect';
import notes from '../../../src/data/data';

const getNote = (id: string) => {
  return notes.find(note => note.id === parseInt(id))
}

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    const note = getNote(req.query.id as string);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ data: note })
  })
  .patch((req, res) => {
    const note = getNote(req.query.id as string);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const newNote = {
      ...note,
      ...req.body
    }

    const index = notes.findIndex(note => note.id === parseInt(req.query.id as string));
    notes[index] = newNote;

    res.json({ data: newNote })
  })
  .delete((req, res) => {
    const note = getNote(req.query.id as string);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const index = notes.findIndex(note => note.id === parseInt(req.query.id as string));
    notes.splice(index, 1);

    return res.json({ data: req.query.id })
  });

export default handler;