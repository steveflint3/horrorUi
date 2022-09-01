// const express = require('express');
import express from 'express';
import movies from './models/movies.js';
const router = express.Router();

// Get all movies
router
  .get('/movies', async (req, res) => {
    const hm = await movies.find();
    res.send(hm);
  })

  .post('/movies/post', async (req, res) => {
    const result = await movies.insertMany({ title: req.body.title, year: req.body.year });

    res.send(result);
  });

export default router;
