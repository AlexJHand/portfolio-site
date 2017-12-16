// Requires
var router = require('express').Router();
var path = require('path');

// Base url get
router.get('/', function(req, res) {
    console.log('In base url');
    var indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
}); // End get

// Export 
module.exports = router;