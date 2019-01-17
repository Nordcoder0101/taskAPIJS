const controller = require("../controllers/controller");

module.exports = (app) => {
  
  app
    .get('/getalltasks', controller.getAllTasks)
    .get('/gettaskbyid/:id', controller.getTaskById)
    .post('/createnewtask', controller.createTask)
    .delete('/deletetask/:id', controller.deleteTask)
    .put('/gettaskandupdate/:id', controller.getTaskByIdAndUpdate)

}
