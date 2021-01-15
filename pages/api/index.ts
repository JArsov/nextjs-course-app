// pages/api/data.js
// route => /api/data

import { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((_, res) => {
    res.json({ message: 'ok' })
  })
  .post((_, res) => {
    res.json({ message: 'posted' })
  })

export default (_, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'hello' }))
}