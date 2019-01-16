const Task = require('./Task')

module.exports = {

  getAll: () => {
    return Task.find()
      .then(results => {
        return {
          message: 'success',
          data: results
        }
      })
      .catch(err => {
        return {
          message: 'err',
          data: err
        }
      })
  },
  
   getTaskById: function(id){
     return Task.findById(id)
     .then((task)=> {
       return {
         message: "Success",
         data: task
        }
      })
     .catch((err)=> {
       return {
         message: 'err',
         data: err
        }
      })
   },

   createTask: function(data){
     
     let task = new Task(data)
     return task.save()
     .then((task)=> {
       return {
         message: 'Success',
         data: task
        }
      })
     .catch((err)=> {
       return {
         message: 'err',
         data: err
        }
      })
   },

   findByIdAndUpdate: function(id, data){
     
      return Task.findById(id)
     .then((task) =>{
      task.title = data.title
      task.description = data.description
      task.completed = data.completed
      task.updatad_at = new Date()
      return task.save()
     .then((task) => {
       return {
         message: 'Success',
         data: task
        }
      })
     .catch((err) => {
       return {
         message: 'err',
         data: err
        }
      })
    })
   },

   findByIdAndDelete: function(id){
     console.log('got here!', id)
     return Task.remove({_id: id})
     .then((result) => {
       
       return {message:'Successfully deleted'}
      })
     .catch(() => {
       return {message:'Something went wrong during delete'}
      })
   }
}