var tasks = [];
function addTask(task) {
    var count;
    tasks.push(task);
    console.log("New Task: " + task + "Added");
    count = task.length;
    return count;
}
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var key = task;
    var index = tasks.IndexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return tasks.length;
}
