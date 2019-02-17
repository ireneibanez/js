
let exit = false;
let taskList = [];

while (exit === false) {

    let menu = window.prompt('Seleccione la opción que desee: \n 1.Mostrar la lista de tareas. \n 2.Añadir una tarea nueva. \n 3.Marcar una tarea como terminada. \n 4.Eliminar una tarea. \n 5.Salir.');

    switch (menu) {
        case '1':
            for (let i=0; i < taskList.length; i++) {
                console.log(i + taskList[i].descripcion + ' .estado: ' + taskList[i].estado);
            }
            break;
        case '2':
            let description = window.prompt('Realice una descripción de la tarea a añadir:')
            if (description) {
                let newTask = {
                    estado: 'pendiente',
                    descripcion: description
                }
                taskList.push(newTask);
            } else {
                console.log('La descripción introducida no es válida');
            }
            break;
        case '3':
            for (let i = 0; i < taskList.length; i++) {
                if (taskList[i].estado === 'pendiente') {
                    console.log(i + taskList[i].descripcion);
                }
            }
            let taskToFinish = window.prompt('Seleccione la tarea a marcar como finalizada');
            if (taskToFinish && taskList[taskToFinish] !== undefined) {
                taskList[taskToFinish].estado = 'terminada';
            } else {
                console.log('El número introducido no se corresponde con ninguna tarea');
            }
            break;
        case '4':
            for (let i = 0; i < taskList.length; i++) {
                console.log(i + taskList[i].descripcion);
            }
            let taskToRemove = window.prompt('Seleccione la tarea que quiere eliminar');
            if (taskToRemove && taskList[taskToRemove] !== undefined) {
                taskList.splice(taskToRemove, 1);
            } else {
                console.log('El número introducido no se corresponde con ninguna tarea');
            }
            break;
        case '5':
            console.log('Gracias por utilizar la aplicación');
            exit = true;
            break;
        default:
            console.log('Operación no válida');    
    }
}