import taskView from '../view/task';
import taskAddFromView from '../view/taskAddForm';
import tasks from '../model/task';

function taskController(rootElement) {

    taskView(rootElement, tasks, {
        onDone,
        onDelete,
        onMove
    });

    taskAddFromView(rootElement, {
        onSubmit
    });


    function onMove(task) {
        tasks.move(task);
    }
    
    function onDone(task, status) {
        tasks.done(task, status);

        console.log('tasks', tasks);
    }

    function onDelete(task) {
        tasks.delete(task);
    }

    function onSubmit(text) {
        tasks.add(text);
    }



}

export default taskController();