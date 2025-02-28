const express = require('express');
const path = require("path");
const router = express.Router();
module.exports = router;

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/../front_page_blood_pressure.html"));
})