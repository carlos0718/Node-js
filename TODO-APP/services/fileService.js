const TaskRepository = require('../repositories/TaskRepository');
const taskRepository = new TaskRepository();

const getAllTask = () => {
    const tasks = taskRepository.getAllTask();
    return tasks.map(e=>{
        //JSON.stringify(e);
       return{ title: e.title, done: e.done}
    })
}
 const createTask = (title) => {
     taskRepository.createTask(title);
 }

 module.exports = {
     getAllTask,
     createTask
 }