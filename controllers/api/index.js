const router = require('express').Router();
const userRoutes = require('./userRoutes');
const savedLocationsRoutes = require('./savedLocationsRoutes');

router.use('/users', userRoutes);
router.use('SavedLocations', savedLocationsRoutes);

module.exports = router;
