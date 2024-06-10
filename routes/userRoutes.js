const express = require("express");
const { RegisterCtrl, loginCtrl, googleCtrl } = require("../controllers/userControler");
const router = express.Router();

router.post("/register", RegisterCtrl);
router.post("/login", loginCtrl);
router.post("/google",googleCtrl);

module.exports = router;
