import project from "./project";

const tasks=(()=>{
    class Task{
        constructor(title,details,date){
            this.title=title;
            this.details=details;
            this.date=date;
            this.completed=false;
        }
    }

    function addTask(title,details,date,projectIndex){
        const newTask = new Task(title, details, date);
        project.projectList[projectIndex].tasks.push(newTask);
    }

    return{
        addTask,
    }
})()

export default tasks;