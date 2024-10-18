// dom.js
import Project from "./project";
import eventListener from "./eventLister";
import tasks from "./task";

const dom = (() => {
  const rightPanel = document.querySelector("#rightPanel");
  const homeorProjectTitle = document.querySelector("#homeorProjectTitle");
  const projectsMenu = document.querySelector("#projects");
  const tasksDiv = document.querySelector("#tasksDiv"); // 显示任务的div
  const allTask = document.querySelector("#allTask");

  let chosenProjectorHomeDom = document.querySelector("#allTask"); // 默认为allTask选项
  let currentIsHomeMenu = true; // 跟踪当前是否是主页菜单

  // 传入点击的dom菜单会或project元素在右侧渲染内容
  function renderHomeorProjectPage(homeOrProjectdom) {
    let isHomeMenu = true;
    homeorProjectTitle.textContent = homeOrProjectdom.textContent;
    chosenProjectorHomeDom = homeOrProjectdom;
    deleteAddTaskDiv();

    if (homeOrProjectdom.id === "project") {
      isHomeMenu = false;
      currentIsHomeMenu = false;
      renderAddTaskDiv(rightPanel);
      const projectIndex = parseInt(
        homeOrProjectdom.getAttribute("data-index"),
        10
      );
      renderTaskToRightPanel(projectIndex, isHomeMenu);
    } else {
      currentIsHomeMenu = true;
      const existingAddTaskCard = document.querySelector("#AddTaskCard");
      if (existingAddTaskCard) {
        rightPanel.removeChild(existingAddTaskCard);
      }
      const projectIndex = parseInt(
        homeOrProjectdom.getAttribute("data-index"),
        10
      );
      renderTaskToRightPanel(0, isHomeMenu);
    }
  }

  function renderProjectsMenu() {
    //把本地项目渲染进入菜单
    const projects = Project.projectList;

    // 清空现有的项目列表，防止重复渲染
    projectsMenu.innerHTML = `
    <h2>Project</h2>
    `;

    projects.forEach((project, index) => {
      const projectDiv = document.createElement("div");
      projectDiv.id = "project";
      projectDiv.classList.add("project-item");
      projectDiv.innerHTML = `
              <p class="project-title">${project.title}</p>
              <div class="project-icons">
                <svg
                  class="rename-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 20h9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16.5 3.5L21 8l-9.5 9.5H7v-4.5L16.5 3.5z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
                <svg
                  class="delete-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 6h18M19 6l-1.334 12.006A2 2 0 0 1 15.675 20H8.325a2 2 0 0 1-1.991-1.994L5 6m3-3h8a1 1 0 0 1 1 1v2H7V4a1 1 0 0 1 1-1z"
                  />
                </svg>
              </div>`;
      projectDiv.setAttribute("data-index", index);
      projectsMenu.appendChild(projectDiv);
      eventListener.addProjectItemClickListener(projectDiv); // 绑定点击事件

      const proIndex = projectDiv.getAttribute("data-index");

      const deleteBt = projectDiv.querySelector(".delete-icon");

      deleteBt.addEventListener("click", (e) => {
        e.stopPropagation(); //阻止事件冒泡
        deleteProjet(proIndex);
      });

      const renameBt = projectDiv.querySelector(".rename-icon");
      renameBt.addEventListener("click", (e) => {
        e.stopPropagation();
        enableInlineRename(projectDiv, proIndex); // 启用内联编辑
      });
    });

    // 添加“添加项目”按钮
    renderAddProjectDiv();
  }

  function renderAddTaskDiv(container) {
    // 渲染添加任务区域
    const addTaskDiv = document.createElement("div");
    addTaskDiv.id = "addTask";
    addTaskDiv.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4v6M4 7h6m.5-6.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"/>
      </svg>
      <span>Add Task<span>
    `;
    container.appendChild(addTaskDiv);
    addTaskDiv.addEventListener("click", renderPopAddTaskCard);
  }

  function deleteAddTaskDiv() {
    //删除添加任务区域
    const addTaskDiv = document.querySelector("#addTask");
    if (addTaskDiv) {
      rightPanel.removeChild(addTaskDiv);
    }
  }

  function renderPopAddTaskCard() {
    // 渲染弹出的添加任务卡片
    const existingAddTaskCard = document.querySelector("#AddTaskCard");
    if (existingAddTaskCard) {
      return; // 如果已经有添加任务卡片就直接返回
    }

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
          <span>Important</span>
        </label>

        <div class="buttons">
          <button type="button" class="Cancel">Cancel</button>
          <button type="submit" class="submit">Submit</button>
        </div>
      </form>
    `;
    rightPanel.appendChild(popAddTaskCard);

    const cancelButton = popAddTaskCard.querySelector(".Cancel");
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
      const important = popAddTaskCard.querySelector("#important").checked; // 使用 checked

      if (title === "") {
        alert("Title is required.");
        return;
      }

      const projectIndex = parseInt(
        chosenProjectorHomeDom.getAttribute("data-index"),
        10
      ); // 获取项目索引值

      tasks.addTask(title, details, date, important, projectIndex); // 添加新的任务到当前项目

      renderTaskToRightPanel(projectIndex, currentIsHomeMenu); // 传递 currentIsHomeMenu

      // 清空输入框
      taskForm.reset();

      // 移除添加任务卡片
      rightPanel.removeChild(popAddTaskCard);
    });
  }

  function addEventToProject(title, details, date, projectIndex) {
    // 将表单中添加的任务加入项目并渲染
    tasks.addTask(title, details, date, projectIndex);
    renderTaskToRightPanel(projectIndex, currentIsHomeMenu);
  }

  // 将当前project中的项目渲染到右边panel
  function renderTaskToRightPanel(projectIndex, isHomeMenu) {
    tasksDiv.innerHTML = ``;
    console.log(
      `Rendering tasks for projectIndex=${projectIndex}, isHomeMenu=${isHomeMenu}`
    );

    if (isHomeMenu) {
      //当前点击home菜单，遍历所有任务过滤显示任务
      for (let i = 0; i < Project.projectList.length; i++) {
        if (Project.projectList[i].tasks) {
          Project.projectList[i].tasks.forEach((task, index) => {
            if (chosenProjectorHomeDom.textContent === "AllTask") {
              renderSingleTask(task, index, i); // 传递 projectIndex
            } else if (chosenProjectorHomeDom.textContent === "Today") {
              const today = new Date().toISOString().split("T")[0];
              if (task.date === today) {
                // 只渲染日期等于今天的任务
                renderSingleTask(task, index, i); // 传递 projectIndex
              }
            } else if (chosenProjectorHomeDom.textContent === "ThisWeek") {
              const today = new Date();
              const startOfWeek = new Date(
                today.setDate(today.getDate() - today.getDay())
              ); // 当前周的第一天（星期天）
              const endOfWeek = new Date(today.setDate(today.getDate() + 6)); // 当前周的最后一天（星期六）
              const taskDate = new Date(task.date);

              // 检查任务日期是否在本周范围内
              if (taskDate >= startOfWeek && taskDate <= endOfWeek) {
                renderSingleTask(task, index, i); // 渲染任务
              }
            } else if (chosenProjectorHomeDom.textContent === "Important") {
              if (task.important === true) {
                renderSingleTask(task, index, i);
              }
            }
          });
        }
      }
    } else {
      if (
        Project.projectList[projectIndex] &&
        Project.projectList[projectIndex].tasks
      ) {
        Project.projectList[projectIndex].tasks.forEach((task, index) => {
          renderSingleTask(task, index, projectIndex); // 传递 projectIndex
        });
      } else {
        console.error(`项目索引 ${projectIndex} 的 tasks 未定义`);
      }
    }
  }

  function renderSingleTask(task, index, projectIndex) {
    // 添加 projectIndex 参数
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.setAttribute("data-index", index);
    taskDiv.setAttribute("data-project-index", projectIndex); // 使用传递的 projectIndex

    const dueDate = task.date ? task.date : "No Due Date";
    const importantIndicator = task.important
      ? '<span class="importantIndicator" title="Important">⭐</span>'
      : "";

    taskDiv.innerHTML = `
      <div class="leftTaskDiv">
        <button class="completeBtn">${task.completed ? "✔️" : "⭕"}</button>
        <h3 class="taskTitle">${task.title}</h3>
        ${importantIndicator}
      </div>
      <div class="rightTaskDiv">
        <button class="details">Details</button>
        <p class="taskDate">${dueDate}</p>
        <button class="editBtn">✏️</button>
        <button class="deleteBtn">🗑️</button>
      </div>
    `;
    tasksDiv.appendChild(taskDiv);

    const proIndex = projectIndex;
    const taIndex = index;
    const deleteBtn = taskDiv.querySelector(".deleteBtn");
    const completeBtn = taskDiv.querySelector(".completeBtn");
    const taskTitleElement = taskDiv.querySelector(".taskTitle"); // 使用类选择器
    const editBtn = taskDiv.querySelector(".editBtn");
    const detailsBtn = taskDiv.querySelector(".details");

    deleteBtn.addEventListener("click", () => {
      renderRemoveTask(proIndex, taIndex);
    });

    completeBtn.addEventListener("click", () => {
      toggleTaskCompleted(proIndex, taIndex);
      if (task.completed) {
        taskTitleElement.classList.add("completedTitle");
        console.log(taskTitleElement.classList);
      } else {
        taskTitleElement.classList.remove("completedTitle");
      }
    });

    editBtn.addEventListener("click", () => {
      openEditModal(projectIndex, taIndex);
    });

    detailsBtn.addEventListener("click", () => {
      openDetailModal(projectIndex, taIndex);
    });
  }

  function openDetailModal(projectIndex, taskIndex) {
    const project = Project.projectList[projectIndex];
    if (!project || !project.tasks[taskIndex]) {
      alert("Invalid task.");
      return;
    }

    const task = project.tasks[taskIndex];

    detailcontent.querySelector("#detailTitle").textContent = task.title;
    detailcontent.querySelector("#detailDetails").textContent = task.details;
    detailcontent.querySelector("#detailDate").textContent = task.date;
    detailcontent.querySelector("#detailImportant").textContent =
      task.important;

    detailsModal.classList.add("show");

    const closeBtn = document.querySelector(".detilesModalContent .closeBtn");

    closeBtn.onclick = closeDetailModal;

    window.onclick = (event) => {
      if (event.target === detailsModal) {
        closeDetailModal();
      }
    };
  }

  function openEditModal(projectIndex, taskIndex) {
    //打开编辑模态框让用户编辑
    const project = Project.projectList[projectIndex];
    if (!project || !project.tasks[taskIndex]) {
      alert("Invalid task.");
      return;
    }

    const task = project.tasks[taskIndex];

    // 将原task数据填充进入表单
    editTaskForm.querySelector("#editTitle").value = task.title;
    editTaskForm.querySelector("#editDetails").value = task.details;
    editTaskForm.querySelector("#editDate").value = task.date;
    editTaskForm.querySelector("#editImportant").checked = task.important;

    // 显示模态窗口
    editTaskModal.classList.add("show");

    // 处理表单提交
    editTaskForm.onsubmit = (e) => {
      e.preventDefault();

      const updatedTitle = editTaskForm
        .querySelector("#editTitle")
        .value.trim(); //使用trim函数数据清洗
      const updatedDetails = editTaskForm
        .querySelector("#editDetails")
        .value.trim();
      const updatedDate = editTaskForm.querySelector("#editDate").value;
      const updatedImportant =
        editTaskForm.querySelector("#editImportant").checked;

      if (updatedTitle === "") {
        alert("Title is required.");
        return;
      }

      // 更新任务数据
      task.title = updatedTitle;
      task.details = updatedDetails;
      task.date = updatedDate;
      task.important = updatedImportant;

      // 关闭模态窗口
      closeEditModal();

      // 重新渲染任务列表
      renderTaskToRightPanel(projectIndex, currentIsHomeMenu);
    };

    const cancelBtn = document.querySelector(".editButtons .cancelBtn");
    const closeBtn = document.querySelector(".modal-content .closeBtn");
    // 关闭按钮事件
    closeBtn.onclick = closeEditModal;
    cancelBtn.onclick = closeEditModal;

    // 点击模态窗口外部关闭
    window.onclick = (event) => {
      if (event.target === editTaskModal) {
        closeEditModal();
      }
    };
  }

  // 关闭编辑模态窗口
  function closeEditModal() {
    editTaskModal.classList.remove("show");
  }

  function closeDetailModal() {
    detailsModal.classList.remove("show");
  }

  function renderRemoveTask(projectIndex, taskIndex) {
    // 删除任务
    console.log(
      `Deleting task: projectIndex=${projectIndex}, taskIndex=${taskIndex}`
    );
    tasks.deleteTask(projectIndex, taskIndex);
    const taskDiv = document.querySelector(
      `[data-index="${taskIndex}"][data-project-index="${projectIndex}"]`
    );
    if (taskDiv && tasksDiv.contains(taskDiv)) {
      console.log(`Removing task element:`, taskDiv);
      tasksDiv.removeChild(taskDiv);
    } else {
      console.error(
        `未找到要删除的任务元素: data-index=${taskIndex}, data-project-index=${projectIndex}`
      );
    }
    renderTaskToRightPanel(projectIndex, currentIsHomeMenu); // 传递 currentIsHomeMenu
  }

  function toggleTaskCompleted(projectIndex, taskIndex) {
    // 修正拼写
    console.log(
      `Toggling task completed: projectIndex=${projectIndex}, taskIndex=${taskIndex}`
    );
    tasks.toggleTaskComplted(projectIndex, taskIndex); // 确保函数名与 tasks 模块一致
    renderTaskToRightPanel(projectIndex, currentIsHomeMenu); // 传递 currentIsHomeMenu
  }

  // 渲染添加项目区域
  function renderAddProjectDiv() {
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

  // 移除添加项目区域
  function renderRemoveAddProjectDiv() {
    const addProjectDiv = document.querySelector("#addProjectDiv");
    if (addProjectDiv) {
      projectsMenu.removeChild(addProjectDiv);
    }
  }

  // 渲染弹出添加项目卡片
  function renderPopAddProjectCard() {
    const existingAddProjectCard = document.querySelector("#AddProjectCard");
    if (existingAddProjectCard) {
      return; // 如果已经有添加项目卡片就直接返回
    }

    const popAddProjectCard = document.createElement("div");
    popAddProjectCard.id = "AddProjectCard";
    popAddProjectCard.innerHTML = `
      <form id="projectForm">
        <input type="text" id="projectTitle" name="title" placeholder="Project Title" required>
        <div class="buttons">
          <button type="button" class="projectCancel">Cancel</button>
          <button type="submit" class="projectsubmit">Submit</button>
        </div>
      </form>
    `;
    projectsMenu.appendChild(popAddProjectCard);

    const cancelButton = popAddProjectCard.querySelector(".projectCancel");
    cancelButton.addEventListener("click", renderRemoveAddProjectCard);

    const projectForm = popAddProjectCard.querySelector("#projectForm");
    projectForm.addEventListener("submit", renderNewProjectToMenu);
  }

  // 移除pop添加卡片部分
  function renderRemoveAddProjectCard() {
    const popAddProjectCard = document.querySelector("#AddProjectCard");
    if (popAddProjectCard) {
      projectsMenu.removeChild(popAddProjectCard);
    }
  }

  // 将创建好的project元素渲染到菜单界面
  function renderNewProjectToMenu(e) {
    e.preventDefault();
    const projectTitleInput = document.querySelector("#projectTitle");
    const projectTitle = projectTitleInput.value.trim();

    if (projectTitle === "") {
      alert("Project title is required.");
      return;
    }

    Project.addProject(projectTitle);
    const project = document.createElement("div");
    project.id = "project";
    project.classList.add("project-item");
    project.innerHTML = `
              <p class="project-title">${projectTitle}</p>
              <div class="project-icons">
                <svg
                  class="rename-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 20h9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                  <path
                    d="M16.5 3.5L21 8l-9.5 9.5H7v-4.5L16.5 3.5z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </svg>
                <svg
                  class="delete-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 6h18M19 6l-1.334 12.006A2 2 0 0 1 15.675 20H8.325a2 2 0 0 1-1.991-1.994L5 6m3-3h8a1 1 0 0 1 1 1v2H7V4a1 1 0 0 1 1-1z"
                  />
                </svg>
              </div>`;
    project.setAttribute("data-index", Project.projectList.length - 1); // 在dom元素设置data-index存储索引值
    renderRemoveAddProjectCard();
    renderRemoveAddProjectDiv();
    projectsMenu.appendChild(project);
    renderAddProjectDiv();
    eventListener.addProjectItemClickListener(project); // 绑定点击事件

    const proIndex = project.getAttribute("data-index");

    const deleteBt = project.querySelector(".delete-icon");

    deleteBt.addEventListener("click", (e) => {
      e.stopPropagation(); //阻止事件冒泡
      deleteProjet(proIndex);
    });

     const renameBt = project.querySelector(".rename-icon");
     renameBt.addEventListener("click", (e) => {
       e.stopPropagation();
       enableInlineRename(project, proIndex); // 启用内联编辑
     });
  }

  function enableInlineRename(projectDiv, projectIndex) {
    const projectTitleElement = projectDiv.querySelector(".project-title");
    const currentTitle = projectTitleElement.textContent;

    const renameInput = document.createElement("input");
    renameInput.type = "text";
    renameInput.value = currentTitle;
    renameInput.classList.add("rename-input");
    projectTitleElement.replaceWith(renameInput);//直接在projectTitle处替换成输入框
    renameInput.focus();

    // 处理键盘输入
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        const newTitle = renameInput.value.trim();
        if (newTitle === "") {
          alert("Project title cannot be empty.");
          return;
        }
        renameProject(projectIndex, newTitle, projectDiv, renameInput);//输入enter更改名字
      } else if (e.key === "Escape") {
        cancelRename(currentTitle, renameInput, projectDiv);
      }
    };

    renameInput.addEventListener("keydown", handleKeyDown);

    renameInput.addEventListener("blur", () => {
      setTimeout(() => {
        // 添加延迟以确保 DOM 更新
        const newTitle = renameInput.value.trim();
        if (newTitle !== "") {
          renameProject(projectIndex, newTitle, projectDiv, renameInput);
        } else {
          cancelRename(currentTitle, renameInput, projectDiv);
        }
      }, 0);
    });
  }

  function renameProject(projectIndex, newTitle, projectDiv, renameInput) {
    Project.renameProject(projectIndex, newTitle); // 更新项目数据
    const newProjectTitleElement = document.createElement("p");
    newProjectTitleElement.classList.add("project-title");
    newProjectTitleElement.textContent = newTitle;
    renameInput.replaceWith(newProjectTitleElement);//输入框换回更改的title与元素
    homeorProjectTitle.textContent = newTitle;
  }

  function cancelRename(originalTitle, renameInput, projectDiv) {
    const originalProjectTitleElement = document.createElement("p");
    originalProjectTitleElement.classList.add("project-title");
    originalProjectTitleElement.textContent = originalTitle;
    renameInput.replaceWith(originalProjectTitleElement);
  }

  function deleteProjet(projectIndex) {
    //删除数据project
    Project.deleteProject(projectIndex);
    const projectDiv = document.querySelector(`[data-index="${projectIndex}"]`);
    if (projectDiv) {
      projectsMenu.removeChild(projectDiv);
      allTask.click(); //界面回到初始状态
    }
  }

  return {
    renderProjectsMenu,
    renderHomeorProjectPage,
    renderAddProjectDiv,
  };
})();

export default dom;
