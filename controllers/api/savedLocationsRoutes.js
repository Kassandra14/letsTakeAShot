const router = require('express').Router();
const { SavedLocations } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newLocation = await SavedLocations.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLocation);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const LocationData = await SavedLocations.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!LocationData) {
      res.status(404).json({ message: 'No locations found with this id!' });
      return;
    }

    res.status(200).json(LocationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
