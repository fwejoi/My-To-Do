import Task from './task'

const project=(()=>{
    class Project{
        constructor(title){
            this.title=title;
            this.tasks=[];
        }
    }

    let projectList=[];
    projectList.push(new Project("Default"));

    function addProject(title){
        const newProject = new Project(title);
        projectList.push(newProject);
        return newProject;
    }

    return {
      projectList,
      addProject,
    };
})()

export default project;