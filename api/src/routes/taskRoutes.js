// requiring exress
const express = require("express");
// requiring the appcontroller to to anble users
const controller = require("../controllers/tasksController")

// creating a variable tha holds object for declaring route within our application
const router = require("express").Router();

router.get('/', controller.index)
router.post('/', controller.save)
router.put('/:id', controller.edit)
router.get('/:id', controller.task)
router.delete('/:id', controller.delete)
router.delete('/clear', controller.clear)
router.put('/:id/toggle', controller.toggleCompleted)
module.exports = router;

