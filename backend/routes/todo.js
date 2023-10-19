const {Router} = require("express");
const {getToDo, saveToDo, updatetodo, deletetodo} = require("../controller/tdcontroller.js")
const router = Router();
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updatetodo)
router.post('/delete', deletetodo)


module.exports = router;