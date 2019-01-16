const Task = require('./../models/Task/taskMethods')



module.exports = {
  index: function(req, res){
    res.render('index')
  },
  getAllTasks: async (req, res) => {
    let result = await Task.getAll()
    res.json(result);
  },
  getTaskById: async (req, res) => {
    let result = await Task.getTaskById(req.params.id)
    res.json(result)
  },
  createTask: async (req, res) => {
    let result = await Task.createTask(req.body)
    res.json(result)
  },

  getTaskByIdAndUpdate: async (req, res) => {
    let result = await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json(result)
  },
  deleteTask: async (req, res) => {
    console.log('Im a controller')
    let result = await Task.findByIdAndDelete(req.params.id)
    return result
  }

}
