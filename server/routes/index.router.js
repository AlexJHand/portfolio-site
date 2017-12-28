// Requires
const router = require('express').Router();
const path = require('path');

// Base url get
router.get('/', function(req, res) {
    console.log('In base url');
    let indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
}); // End get

// Export 
module.exports = router;