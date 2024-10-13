// eventListener.js

import dom from "./dom";

const eventListener = (() => {
  // 选择所有菜单项和项目项
  const menuItems = document.querySelectorAll(".menu-item");
  const projectItems = document.querySelectorAll(".project-item");

  // 设置激活项的通用函数（移动到模块顶层）
  function setActiveItem(element) {
    const activeItem = document.querySelector(".active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    element.classList.add("active");
  }

  // 初始化事件监听器
  function listenClick() {
    // 为所有菜单项添加点击事件监听器
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        setActiveItem(item);
        dom.renderHomeorProjectPage(item); // 传递当前菜单项的元素
      });
    });

    // 为所有项目项添加点击事件监听器
    projectItems.forEach((item) => {
      addProjectItemClickListener(item);
    });
  }

  // 为项目项添加点击事件监听器
  function addProjectItemClickListener(projectItem) {
    projectItem.addEventListener("click", () => {
      setActiveItem(projectItem);
      // 假设 renderHomeorProjectPage 需要项目标题作为参数
      dom.renderHomeorProjectPage(projectItem);
    });
  }

  return {
    listenClick,
    addProjectItemClickListener,
  };
})();

export default eventListener;
