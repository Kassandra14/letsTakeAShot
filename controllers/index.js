const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const savedLocationsRoutes = require('./savedLocationsRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/SavedLocations', savedLocationsRoutes);

module.exports = router;
