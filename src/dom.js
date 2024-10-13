import Project from "./project";
import eventListener from "./eventLister";
import tasks from "./task";

const dom = (() => {
  const rightPanel = document.querySelector("#rightPanel");
  const homeorProjectTitle = document.querySelector("#homeorProjectTitle");
  const projectsMenu = document.querySelector("#projects");

  const chosenProjectorHomeDom = document.querySelector("#allTask");
  //传入点击的dom菜单会或project元素在右侧渲染内容
  function renderHomeorProjectPage(homeOrProjectdom) {
    homeorProjectTitle.textContent = homeOrProjectdom.textContent;
    deleteAddTaskDiv();
    if (homeOrProjectdom.id === "project") {
      rederAddTaskDiv();
    }
    chosenProjectorHomeDom = homeOrProjectdom;
  }

  function rederAddTaskDiv() {
    //渲染添加任务区域
    const addTaskDiv = document.createElement("div");
    addTaskDiv.id = "addTask";
    addTaskDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4v6M4 7h6m.5-6.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"/>
    </svg>
    <span>Add Task<span>
    `;
    rightPanel.appendChild(addTaskDiv);
    addTaskDiv.addEventListener("click", renderPopAddTaskCard);
  }

  function deleteAddTaskDiv() {
    const addTaskDiv = document.querySelector("#addTask");
    if (addTaskDiv) {
      rightPanel.removeChild(addTaskDiv);
    }
  }

  function renderPopAddTaskCard() {
    //渲染弹出的添加任务卡片
    const AddTaskCard = document.querySelector("#AddTaskCard");
    if (AddTaskCard) {
      return;
    } //如果已经有添加任务卡片就直接返回
    const popAddTaskCard = document.createElement("div");
    popAddTaskCard.id = "AddTaskCard";
    popAddTaskCard.innerHTML = `
    <form id="taskForm">
            <label for="title">Title<span style="color: red;">*</span></label>
            <input type="text" id="title" name="title" required>

            <label for="details">Details</label>
            <textarea id="details" name="details" rows="4" placeholder="optional"></textarea>

            <label for="date">Date</label>
            <input type="date" id="date" name="date">

             <label class="important-toggle" for="important">
              <input type="checkbox" id="important" name="important">
              <span>Improtant</span>
            </label>

            <div class="buttons">
              <button type="button" class="Cancel">Cancel</button>
              <button type="submit" class="submit">Submit</button>
            </div>
          </form>
    `;
    rightPanel.appendChild(popAddTaskCard);
    const cancelButton = document.querySelector(".Cancel");
    cancelButton.addEventListener("click", () => {
      rightPanel.removeChild(popAddTaskCard);
    });
    const taskForm = popAddTaskCard.querySelector("#taskForm");
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // 使用FormData获取表单数据
      const formData = new FormData(taskForm);
      const title = formData.get("title").trim();
      const details = formData.get("details").trim();
      const date = formData.get("date");
      const important = formData.get("important") === "on";

      if (title === "") {
        alert("Title is required.");
        return;
      }

      const projectIndex = 0;
      if (chosenProjectorHomeDom.classList.contains("project-item")) {
        
      }

      addEventToProject(title, details, date, important, projectIndex);

      // 清空输入框
      taskForm.reset();

      // 移除添加任务卡片
      rightPanel.removeChild(popAddTaskCard);
    });
  }

  function addEventToPoject(title, details, date, projectIndex) {
    //将表单中添加的任务加入项目并渲染
    tasks.addTask(title, details, date, projectIndex);
    renderTaskToRightPanel(projectIndex);
  }

  function renderTaskToRightPanel(projectIndex) {
    //将当前project中的项目渲染到右边panel
    Project.projectList[projectIndex].tasks.forEach((task) => {
      const taskDiv = document.createElement("div");
      taskDiv.id = taskDiv;
      taskDiv.innerHTML = `
         <p>${task.title}</p>
        `;
      rightPanel.appendChild(taskDiv);
    });
  }

  function renderAddProjectDiv() {
    //渲染添加项目区域
    const addProjectDiv = document.createElement("div");
    addProjectDiv.id = "addProjectDiv";
    addProjectDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4v6M4 7h6m.5-6.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"/>
    </svg>
    <span>Add Project<span>
    `;
    projectsMenu.appendChild(addProjectDiv);
    addProjectDiv.addEventListener("click", renderPopAddProjectCard);
  }

  function renderRemoveAddProjectDiv() {
    //移除添加项目区域
    const addProjectDiv = document.querySelector("#addProjectDiv");
    if (addProjectDiv) {
      projectsMenu.removeChild(addProjectDiv);
    }
  }

  function renderPopAddProjectCard() {
    //渲染弹出添加项目卡片
    const AddProjectCard = document.querySelector("#AddProjectCard");
    if (AddProjectCard) {
      return;
    } //如果已经有添加项目卡片就直接返回
    const popAddProjectCard = document.createElement("div");
    popAddProjectCard.id = "AddProjectCard";
    popAddProjectCard.innerHTML = `
    <form id="projectForm">
            <input type="text" id="projectTitle" name="title" placeholder="Project Title">
            <div class="buttons">
              <button type="button" class="projectCancel">Cancel</button>
              <button type="submit" class="projectsubmit">Submit</button>
            </div>
    </form>
    `;
    projectsMenu.appendChild(popAddProjectCard);
    const cancelButton = document.querySelector(".projectCancel");
    const projectForm = popAddProjectCard.querySelector("#projectForm");
    cancelButton.addEventListener("click", renderRemoveAddProjectCard);
    projectForm.addEventListener("submit", renderProjectToMenu);
  }

  function renderRemoveAddProjectCard() {
    //移除pop添加卡片部分
    const popAddProjectCard = document.querySelector("#AddProjectCard");
    if (popAddProjectCard) {
      projectsMenu.removeChild(popAddProjectCard);
    }
  }

  function renderProjectToMenu(e) {
    //将创建好的project元素渲染到菜单界面
    e.preventDefault();
    const projectTitle = document.querySelector("#projectTitle").value;
    Project.addProject(projectTitle);
    const project = document.createElement("div");
    project.classList.add("project-item");
    project.textContent = projectTitle;
    renderRemoveAddProjectCard();
    renderRemoveAddProjectDiv();
    projectsMenu.appendChild(project);
    renderAddProjectDiv();
    eventListener.addProjectItemClickListener(project); //绑定点击事件
  }

  return {
    renderHomeorProjectPage,
    renderAddProjectDiv,
  };
})();

export default dom;
