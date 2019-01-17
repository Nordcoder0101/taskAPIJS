const controller = require("../controllers/controller")
module.exports = (app) => {
  // app.get('/', controller.index)
  app.get('/getalltasks', controller.getAllTasks)
  app.get('/gettaskbyid/:id', controller.getTaskById)
  app.post('/createnewtask', controller.createTask)
  app.delete('/deletetask/:id', controller.deleteTask)
  app.put('/gettaskandupdate/:id', controller.getTaskByIdAndUpdate)

}
