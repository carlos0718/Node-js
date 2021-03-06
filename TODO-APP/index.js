const {inquirerMenu, inquirerInput} = require('./helpers/inquirer');

const TaskRepository = require('./repositories/TaskRepository')

const main = async() => {
    
    const taskRepository = new TaskRepository();
    let option = '';

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
    
                const title = await inquirerInput('Task Title');
                
                taskRepository.createTask(title);

                console.log('\nTarea creda exitosamente...\n'.red);
                
                break;
            case 2:

                const allTasks = taskRepository.getAllTask()

                console.log(allTasks);
                
                break;
        }
    } while (option !== 0);
    
}

main();