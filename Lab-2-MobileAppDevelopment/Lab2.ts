let tasks: Array<string> = [];
function addTask(task:string):  number{

    let count: number;
    tasks.push(task)
    console.log("New Task: " + task + "Added");
    count = task.length;
    return count
}

function listAllTasks(){
    tasks.forEach(function(task){
        console.log(task)
    })

}

function deleteTask(task:string): number{

    let key: string = task;
    let index: number = tasks.lastIndexOf(key,0);
        if(index > -1)
        {
            tasks.splice(index, 1);
        }
        return tasks.length
}

