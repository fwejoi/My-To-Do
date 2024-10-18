import Task from "./task";

const project = (() => {
  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }

  let projectList = [];
  projectList.push(new Project("Default")); //默认项目

  function addProject(title) {
    const newProject = new Project(title);
    projectList.push(newProject);
    saveProjects();
  }

  function deleteProject(projectIndex) {
    projectList.splice(projectIndex, 1);
    saveProjects();
  }

  function renameProject(projectIndex,newTitle){
    projectList[projectIndex].title = newTitle;
    saveProjects();
  }

  function loadProjects() {
    //从本地加载项目
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      projectList = JSON.parse(storedProjects);
    }
  }

  // 保存项目列表到 localStorage
  function saveProjects() {
    //保存项目
    localStorage.setItem("projects", JSON.stringify(projectList));
  }

  loadProjects();

  return {
    projectList,
    addProject,
    saveProjects,
    deleteProject,
    renameProject,
  };
})();

export default project;
