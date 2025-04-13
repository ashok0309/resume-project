const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Save a resume
router.post('/', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const saved = await newResume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a resume by ID
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
