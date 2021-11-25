/* Man Young Oh / 301161472 / COMP229-005 */

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholer');
});

module.exports = router;
