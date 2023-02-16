const router = require('express').Router();
const accountRoutes = require('./account-routes')
const postRoutes = require('./post-routes');

router.use('/accounts', accountRoutes);
router.use('/posts', postRoutes);

module.exports = router;