const {Router} = require("express");
const {getToDo, saveToDo} = require("../controller/tdcontroller.js")
const router = Router();
router.get('/', getToDo)
router.post('/save', saveToDo)


module.exports = router;