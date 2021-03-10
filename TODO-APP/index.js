const {inquirerMenu, inquirerInput} = require('./helpers/inquirer');
const {getAllTask, createTask} = require('./services/fileService');
//const TaskRepository = require('./repositories/TaskRepository')

const main = async() => {
    
    //const taskRepository = new TaskRepository();
    let option = '';

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
    
                const title = await inquirerInput('Task Title');
                
                createTask(title);

                console.log('\nTarea creda exitosamente...\n'.red);
                
                break;
            case 2:

                const allTasks = getAllTask()
                /* let x = 0;
                for ( i in allTasks){
                    x++;
                    console.log(`${x} -${allTasks[i].title}`.blue);
                } */
                console.log(allTasks);
                
                break;
        }
    } while (option !== 0);
    
}

main();