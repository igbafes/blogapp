const express = require('express');
const router = express.Router();
const { celebrate, errors } = require('celebrate');
const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// Mount sub-routers
router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

// Handle Celebrate validation errors
router.use(errors());

module.exports = router;