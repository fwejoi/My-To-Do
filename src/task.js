import project from "./project";

const tasks = (() => {
  class Task {
    constructor(title, details, date, important) {
      this.title = title;
      this.details = details;
      this.date = date;
      this.important = important;
      this.completed = false;
      this.projectIndex=0;
    }
  }

  function addTask(title, details, date, important, projectIndex) {
    //向目标项目添加任务
    const newTask = new Task(title, details, date, important);
    newTask.projectIndex = projectIndex;
    project.projectList[projectIndex].tasks.push(newTask);
    project.saveProjects(); // 保存
  }

  function deleteTask(projectIndex,taskIndex){//从目标项目中删除任务
    if(projectIndex>-1){
      project.projectList[projectIndex].tasks.splice(taskIndex, 1);
      project.saveProjects(); // 保存
    }
  }

  function toggleTaskComplted(projectIndex,taskIndex){
    if (projectIndex > -1) {
      const task = project.projectList[projectIndex].tasks[taskIndex];
      task.completed = !task.completed; // 切换任务的完成状态
      project.saveProjects(); // 保存
    }
  }

  return {
    addTask,
    deleteTask,
    toggleTaskComplted,
  };
})();

export default tasks;
