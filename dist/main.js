/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/cjs.js!../../tongshiyu/My-To-Do/src/styles.css":
/*!************************************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/css-loader/dist/cjs.js!../../tongshiyu/My-To-Do/src/styles.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: default;
}

#app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#header {
  background-color: #ffd8d4;
  height: 10vh;
  border-bottom: 2px solid #f28585;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lilita One", sans-serif;
  font-size: 3rem;
}

#footer {
    display: flex; /* 使用 flexbox 布局 */
    justify-content: center; /* 项目之间均匀分布 */
    align-items: center; /* 垂直居中对齐 */
    background-color: #ffd8d4;
    padding: 10px 20px; /* 内边距 */
    border-top: 1px solid #ccc; /* 顶部边框 */
}

#footer img {
    width: 30px; /* 设置图像宽度 */
    height: auto; /* 高度自适应 */
    margin-left: 5px; /* 左侧边距 */
    background-color: #ffd8d4;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
}

#footer img:hover {
    transform: scale(1.1); /* 悬停时放大图像 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}



#container {
  flex: 1;
  display: flex;
}

#leftPanel {
  flex: 0.6;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
}

#home {
  padding: 4px 10px 0px 10px;
  height: 40vh;
  display: flex;
  flex-direction: column;
}

#home h2 {
  position: relative;
  padding-bottom: 2px;
}

#home h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #202021; /* 下划线颜色 */
}

/* 每个菜单项的通用样式 */
.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* 每个菜单项占用相等的空间 */
  text-align: center;
  padding: 10px 0;
  margin: 0 5px; /* 菜单项之间的间距 */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  color: #333; /* 默认文字颜色 */
  background-color: #ffe3e1;
  margin-bottom: 2px;
}

.menu-item:hover {
  background-color: #ffb4ad;
}

.menu-item.active {
  background-color: #ff9187;
}

#projects {
  flex: 1;
  padding: 0px 10px;
  height: 40vh;
  display: flex;
  flex-direction: column;
}

#projects h2 {
  position: relative;
  padding-bottom: 2px;
}

#projects h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #202021; /* 下划线颜色 */
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  text-align: center;
  padding: 10px 20px;
  margin: 0 5px; /* 菜单项之间的间距 */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s, color 0.3s;
  color: #333; /* 默认文字颜色 */
  background-color: #ffe3e1;
  margin-bottom: 2px;
}

.project-item:hover {
  background-color: #ffb4ad;
}

.project-item.active {
  background-color: #ff9187;
}

.project-menu-icon {
  fill: #333; /* 设置图标颜色 */
  cursor: pointer; /* 鼠标悬停时变成指针 */
  transition: fill 0.3s; /* 添加过渡效果 */
}

.project-menu-icon:hover {
  fill: #f5dcd6; /* 鼠标悬停时改变颜色 */
}

#rightPanel {
  flex: 2;
  background-color: #f5f5f5;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
}

#homeorProjectTitle {
  height: 90px;
  background-color: #ff9187;
  color: #f4f4f4;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

#addTask {
  margin-top: 10px;
  height: 40px;
  background-color: #ffeeec;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#addTask span {
  font-size: 1.2rem;
}

#addTask:hover {
  background-color: #ffd9d6;
}

#AddTaskCard {
  padding: 10px 8px;
  background-color: #ffffff;
  height: 310px;
  transform: translateY(20px);
  animation: fadeInDown 0.5s forwards;
}

@keyframes fadeInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#taskForm {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#taskForm input[type="text"],
#taskForm input[type="date"],
#taskForm textarea {
  width: 100%-10px;
  padding: 5px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

#taskForm input[type="text"]:focus,
#taskForm input[type="date"]:focus,
#taskForm textarea:focus {
  border-color: #ffb1a9; /* 聚焦时的边框颜色 */
  outline: none;
}

#taskForm textarea {
  resize: vertical; /* 允许用户调整文本区域的大小 */
}

/* 按钮容器样式（可选） */
#taskForm.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 按钮之间的间距 */
  margin-top: 4px;
}

/* 通用按钮样式 */
#taskForm.buttons button {
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 取消按钮样式 */
.Cancel {
  background-color: #e74c3c; /* 鲜艳的红色 */
}

.Cancel:hover {
  background-color: #c0392b; /* 深红色 */
}

.Cancel:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 提交按钮样式 */
.submit {
  background-color: #2ecc71; /* 亮绿色 */
}

.submit:hover {
  background-color: #27ae60; /* 深绿色 */
}

.submit:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.important-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  background-color: #d3d5d7; /* 未选中时的背景色 */
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; /* 为绝对定位的伪元素提供参考 */
  height: 30px;
  width: 200px;
}

.important-toggle input[type="checkbox"] {
  opacity: 0; /* 透明度为0 */
  position: absolute; /* 绝对定位 */
  width: 100%;
  height: 100%;
  cursor: pointer; /* 确保点击区域覆盖整个按钮 */
}

/* Span 用于显示文本和图标 */
.important-toggle span {
  pointer-events: none; /* 防止点击事件穿透到文本 */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: color 0.3s ease;
}

/* 选中状态的样式 */
.important-toggle input[type="checkbox"]:checked + span {
  background-color: #e74c3c; /* 选中时的背景色 */
  color: #fff; /* 文字颜色 */
}

/* 添加图标或其他视觉效果 */
.important-toggle input[type="checkbox"]:checked + span::before {
  content: "✔ ";
  margin-right: 5px;
}

#addProjectDiv {
  margin-top: 10px;
  height: 30px;
  background-color: #ffeeec;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#addProjectDiv span {
  font-size: 1rem;
}

#addProjectDiv:hover {
  background-color: #ffd9d6;
}

#projectForm {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* 按钮容器样式（可选） */
#projectForm.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px; /* 按钮之间的间距 */
  margin-top: 2px;
}

/* 通用按钮样式 */
#projectForm.buttons button {
  padding: 5px 10px;
  border-radius: 2px;
  border: none;
  color: #fff;
  font-size: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.projectCancel {
  background-color: #e74c3c; /* 鲜艳的红色 */
}

.projectCancel:hover {
  background-color: #c0392b; /* 深红色 */
}

.projectCancel:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.projectsubmit {
  background-color: #2ecc71; /* 亮绿色 */
}

.projectsubmit:hover {
  background-color: #27ae60; /* 深绿色 */
}

.projectsubmit:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

#projectForm input[type="text"] {
  margin-top: 3px;
  width: 100%-5px;
  padding: 5px;
  font-size: 0.8rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  height: 20px;
}

#projectForm input[type="text"]:focus,
#projectForm input[type="date"]:focus,
#projectForm textarea:focus {
  border-color: #ffb1a9; /* 聚焦时的边框颜色 */
  outline: none;
}

#tasksDiv {
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.taskDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ff9f9f;
  border-radius: 5px;
  background-color: #ffe3e3;
  position: relative;
  transition: background-color 0.3s ease;
}

.taskDiv:hover {
  background-color: #ffc0c0;
}

.leftTaskDiv {
  display: flex;
  align-items: center;
}

.rightTaskDiv {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
}

/* 日期样式 */
.taskDate {
  font-size: 0.9em;
  color: #888;
  margin-bottom: 5px;
  width: 100px;
}

/* 按钮样式 */
.completeBtn,
.editBtn,
.deleteBtn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  margin: 0;
  transition: transform 0.2s ease-in-out;
}

.completeBtn,
.editBtn,
.deleteBtn:active {
  transform: scale(0.95);
}

/* 编辑和删除按钮样式 */
.editBtn,
.deleteBtn {
  font-size: 1.2em;
  color: #555;
  padding: 5px;
}

.editBtn:hover,
.deleteBtn:hover {
  color: #000;
}

/* 完成按钮样式 */
.completeBtn {
  font-size: 1.5em;
  margin-right: 5px;
}

/* 详情样式 */
.rightTaskDiv p {
  margin: 0;
  font-size: 0.9em;
  color: #555;
}

.details {
  font-size: 1rem;
  border: 1px solid rgb(255, 155, 150);
  color: #ffffff;
  background-color: rgb(255, 155, 150); /* 添加背景色 */
  padding: 5px 10px; /* 增加一些内边距 */
  border-radius: 5px; /* 圆角边框 */
  cursor: pointer; /* 鼠标变成手型 */
  transition: background-color 0.3s ease, transform 0.2s ease-in-out; /* 平滑的过渡效果 */
}

/* 鼠标悬停效果 */
.details:hover {
  background-color: rgb(255, 100, 95); /* 改变背景色 */
  border-color: rgb(255, 100, 95); /* 改变边框色 */
  color: #ffffff; /* 保持字体颜色 */
}

/* 鼠标按下激活效果 */
.details:active {
  transform: scale(0.95); /* 点击时缩小按钮 */
  background-color: rgb(220, 90, 85); /* 进一步改变背景色 */
  border-color: rgb(220, 90, 85); /* 进一步改变边框色 */
}

#taskTitle {
  color: #ff7272;
}

.completedTitle {
  text-decoration: line-through !important;
  z-index: 1;
}

/* 模态窗口整体样式 */
.modal {
  display: none; /* 默认隐藏 */
  position: fixed;
  z-index: 1000; /* 确保模态窗口在最前面 */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* 允许滚动 */
  background-color: rgba(0, 0, 0, 0.5); /* 黑色背景，透明度为0.5 */
  transition: opacity 0.3s ease;
}

/* 显示模态窗口时的样式 */
.modal.show {
  display: block;
  opacity: 1;
}

/* 模态窗口内容样式 */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto; /* 垂直居中 */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* 宽度可根据需要调整 */
  max-width: 500px; /* 最大宽度 */
  border-radius: 5px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 0.5s forwards;
}

/* 关闭按钮样式 */
.modal-content .closeBtn {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.modal-content .closeBtn:hover,
.modal-content .closeBtn:focus {
  color: black;
  text-decoration: none;
}

/* 表单按钮容器样式 */
.buttons {
  display: flex;
  justify-content: center;
}

#editTaskForm {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* 通用按钮样式 */
.buttons button {
  margin-left: 10px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 取消按钮样式 */
.editButtons .cancelBtn {
  background-color: #e74c3c; /* 鲜艳的红色 */
  color: #fff;
}

.editButtons .cancelBtn:hover {
  background-color: #c0392b; /* 深红色 */
}

.editButtons .cancelBtn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 提交按钮样式 */
.editButtons .submitBtn {
  background-color: #2ecc71; /* 亮绿色 */
  color: #fff;
}

.editButtons .submitBtn:hover {
  background-color: #27ae60; /* 深绿色 */
}

.editButtons .submitBtn:active {
  transform: scale(0.98);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 添加动画效果 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Required field indicator */
.required {
  color: red;
}

.detilesModalContent {
  background-color: #fefefe;
  margin: 10% auto; /* 垂直居中 */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* 宽度可根据需要调整 */
  max-width: 500px; /* 最大宽度 */
  border-radius: 5px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 0.5s forwards;
  border: 2px solid rgb(255, 156, 156);
}

/* 关闭按钮样式 */
.detilesModalContent .closeBtn {
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.detilesModalContent .closeBtn:hover,
.detilesModalContent .closeBtn:focus {
  color: black;
  text-decoration: none;
}

#optionsBox {
  display: none; /* 初始隐藏 */
  position: absolute;
  background-color: #ffffff; /* 背景颜色 */
  border-radius: 8px; /* 圆角 */
  border: 1px solid #ddd; /* 边框 */
  padding: 15px; /* 内边距 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
  z-index: 1000; /* 确保在其他元素上方 */
  transition: opacity 0.3s ease; /* 过渡效果 */
}

#optionsBox button {
  display: block; /* 每个按钮占一行 */
  width: 100%; /* 按钮宽度 */
  padding: 10px; /* 内边距 */
  margin: 5px 0; /* 按钮之间的间距 */
  border: none; /* 无边框 */
  border-radius: 5px; /* 圆角 */
  background-color: #ff8478; /* 按钮颜色 */
  color: white; /* 按钮文字颜色 */
  font-size: 1rem; /* 字体大小 */
  cursor: pointer; /* 鼠标指针效果 */
  transition: background-color 0.3s ease; /* 悬停效果过渡 */
}

#optionsBox button:hover {
  background-color: #ff7654; /* 悬停时改变颜色 */
}

#projectRenameBox {
  z-index: 2;
  position: absolute; /* 基于父元素进行定位 */
  top: 100%; /* 顶部位置设置为 100%，表示紧跟在父元素底部 */
  left: 0; /* 左对齐 */
  background-color: white; /* 背景颜色 */
  padding: 10px; /* 内边距 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 4px; /* 圆角 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
  width: 100%; /* 宽度与父元素一致 */
  box-sizing: border-box; /* 确保内边距不会影响宽度 */
}

#projectRenameBox input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#projectRenameBox button {
  padding: 5px 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 80%;
  gap: 20px;
}

#projectRenameBox .buttons {
  display: flex;
}

#proSubmitRename {
  background-color: #4caf50;
  color: white;
}

#proCancelRename {
  background-color: #f44336;
  color: white;
  margin-top: 10px;
}

#projectRenameBox button:hover {
  opacity: 0.8;
}

.project-title {
  font-size: 16px;
  font-weight: bold;
}

.project-icons {
  display: flex;
  gap: 10px;
}

.project-icons svg {
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.project-icons svg:hover {
  opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./../../tongshiyu/My-To-Do/src/styles.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;AACjB;;AAEA;IACI,aAAa,EAAE,kBAAkB;IACjC,uBAAuB,EAAE,aAAa;IACtC,mBAAmB,EAAE,WAAW;IAChC,yBAAyB;IACzB,kBAAkB,EAAE,QAAQ;IAC5B,0BAA0B,EAAE,SAAS;AACzC;;AAEA;IACI,WAAW,EAAE,WAAW;IACxB,YAAY,EAAE,UAAU;IACxB,gBAAgB,EAAE,SAAS;IAC3B,yBAAyB;IACzB,qDAAqD,EAAE,WAAW;AACtE;;AAEA;IACI,qBAAqB,EAAE,YAAY;IACnC,wCAAwC,EAAE,WAAW;AACzD;;;;AAIA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,WAAW;EACX,WAAW;EACX,yBAAyB,EAAE,UAAU;AACvC;;AAEA,eAAe;AACf;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,OAAO,EAAE,iBAAiB;EAC1B,kBAAkB;EAClB,eAAe;EACf,aAAa,EAAE,aAAa;EAC5B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,6CAA6C;EAC7C,WAAW,EAAE,WAAW;EACxB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,WAAW;EACX,WAAW;EACX,yBAAyB,EAAE,UAAU;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa,EAAE,aAAa;EAC5B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,6CAA6C;EAC7C,WAAW,EAAE,WAAW;EACxB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU,EAAE,WAAW;EACvB,eAAe,EAAE,cAAc;EAC/B,qBAAqB,EAAE,WAAW;AACpC;;AAEA;EACE,aAAa,EAAE,cAAc;AAC/B;;AAEA;EACE,OAAO;EACP,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;AACrC;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;;EAGE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;;;EAGE,qBAAqB,EAAE,aAAa;EACpC,aAAa;AACf;;AAEA;EACE,gBAAgB,EAAE,kBAAkB;AACtC;;AAEA,eAAe;AACf;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS,EAAE,YAAY;EACvB,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf;wBACsB;EACtB,wCAAwC;AAC1C;;AAEA,WAAW;AACX;EACE,yBAAyB,EAAE,UAAU;AACvC;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA,WAAW;AACX;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB,EAAE,aAAa;EACxC,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,wCAAwC;EACxC,kBAAkB,EAAE,kBAAkB;EACtC,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,UAAU,EAAE,UAAU;EACtB,kBAAkB,EAAE,SAAS;EAC7B,WAAW;EACX,YAAY;EACZ,eAAe,EAAE,iBAAiB;AACpC;;AAEA,mBAAmB;AACnB;EACE,oBAAoB,EAAE,gBAAgB;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA,YAAY;AACZ;EACE,yBAAyB,EAAE,YAAY;EACvC,WAAW,EAAE,SAAS;AACxB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA,eAAe;AACf;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ,EAAE,YAAY;EACtB,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf;wBACsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB,EAAE,UAAU;AACvC;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,kCAAkC;EAClC,YAAY;AACd;;AAEA;;;EAGE,qBAAqB,EAAE,aAAa;EACpC,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,QAAQ;AACV;;AAEA,SAAS;AACT;EACE,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA,SAAS;AACT;;;EAGE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,cAAc;EACd,SAAS;EACT,sCAAsC;AACxC;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA,cAAc;AACd;;EAEE,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,WAAW;AACb;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA,SAAS;AACT;EACE,SAAS;EACT,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,cAAc;EACd,oCAAoC,EAAE,UAAU;EAChD,iBAAiB,EAAE,YAAY;EAC/B,kBAAkB,EAAE,SAAS;EAC7B,eAAe,EAAE,WAAW;EAC5B,kEAAkE,EAAE,YAAY;AAClF;;AAEA,WAAW;AACX;EACE,mCAAmC,EAAE,UAAU;EAC/C,+BAA+B,EAAE,UAAU;EAC3C,cAAc,EAAE,WAAW;AAC7B;;AAEA,aAAa;AACb;EACE,sBAAsB,EAAE,YAAY;EACpC,kCAAkC,EAAE,aAAa;EACjD,8BAA8B,EAAE,aAAa;AAC/C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,UAAU;AACZ;;AAEA,aAAa;AACb;EACE,aAAa,EAAE,SAAS;EACxB,eAAe;EACf,aAAa,EAAE,eAAe;EAC9B,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc,EAAE,SAAS;EACzB,oCAAoC,EAAE,iBAAiB;EACvD,6BAA6B;AAC/B;;AAEA,eAAe;AACf;EACE,cAAc;EACd,UAAU;AACZ;;AAEA,aAAa;AACb;EACE,yBAAyB;EACzB,gBAAgB,EAAE,SAAS;EAC3B,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,cAAc;EAC1B,gBAAgB,EAAE,SAAS;EAC3B,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;EACzC,mCAAmC;AACrC;;AAEA,WAAW;AACX;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;AACvB;;AAEA,aAAa;AACb;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf;wBACsB;EACtB,wCAAwC;AAC1C;;AAEA,WAAW;AACX;EACE,yBAAyB,EAAE,UAAU;EACrC,WAAW;AACb;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA,WAAW;AACX;EACE,yBAAyB,EAAE,QAAQ;EACnC,WAAW;AACb;;AAEA;EACE,yBAAyB,EAAE,QAAQ;AACrC;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;AAEA,WAAW;AACX;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA,6BAA6B;AAC7B;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,gBAAgB,EAAE,SAAS;EAC3B,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,cAAc;EAC1B,gBAAgB,EAAE,SAAS;EAC3B,kBAAkB;EAClB,kBAAkB;EAClB,yCAAyC;EACzC,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA,WAAW;AACX;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa,EAAE,SAAS;EACxB,kBAAkB;EAClB,yBAAyB,EAAE,SAAS;EACpC,kBAAkB,EAAE,OAAO;EAC3B,sBAAsB,EAAE,OAAO;EAC/B,aAAa,EAAE,QAAQ;EACvB,yCAAyC,EAAE,OAAO;EAClD,aAAa,EAAE,cAAc;EAC7B,6BAA6B,EAAE,SAAS;AAC1C;;AAEA;EACE,cAAc,EAAE,YAAY;EAC5B,WAAW,EAAE,SAAS;EACtB,aAAa,EAAE,QAAQ;EACvB,aAAa,EAAE,YAAY;EAC3B,YAAY,EAAE,QAAQ;EACtB,kBAAkB,EAAE,OAAO;EAC3B,yBAAyB,EAAE,SAAS;EACpC,YAAY,EAAE,WAAW;EACzB,eAAe,EAAE,SAAS;EAC1B,eAAe,EAAE,WAAW;EAC5B,sCAAsC,EAAE,WAAW;AACrD;;AAEA;EACE,yBAAyB,EAAE,YAAY;AACzC;;AAEA;EACE,UAAU;EACV,kBAAkB,EAAE,cAAc;EAClC,SAAS,EAAE,4BAA4B;EACvC,OAAO,EAAE,QAAQ;EACjB,uBAAuB,EAAE,SAAS;EAClC,aAAa,EAAE,QAAQ;EACvB,sBAAsB,EAAE,OAAO;EAC/B,kBAAkB,EAAE,OAAO;EAC3B,yCAAyC,EAAE,OAAO;EAClD,WAAW,EAAE,aAAa;EAC1B,sBAAsB,EAAE,gBAAgB;AAC1C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;AACd","sourcesContent":["body {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f4f4f4;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  cursor: default;\r\n}\r\n\r\n#app {\r\n  width: 100vw;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header {\r\n  background-color: #ffd8d4;\r\n  height: 10vh;\r\n  border-bottom: 2px solid #f28585;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Lilita One\", sans-serif;\r\n  font-size: 3rem;\r\n}\r\n\r\n#footer {\r\n    display: flex; /* 使用 flexbox 布局 */\r\n    justify-content: center; /* 项目之间均匀分布 */\r\n    align-items: center; /* 垂直居中对齐 */\r\n    background-color: #ffd8d4;\r\n    padding: 10px 20px; /* 内边距 */\r\n    border-top: 1px solid #ccc; /* 顶部边框 */\r\n}\r\n\r\n#footer img {\r\n    width: 30px; /* 设置图像宽度 */\r\n    height: auto; /* 高度自适应 */\r\n    margin-left: 5px; /* 左侧边距 */\r\n    background-color: #ffd8d4;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */\r\n}\r\n\r\n#footer img:hover {\r\n    transform: scale(1.1); /* 悬停时放大图像 */\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */\r\n}\r\n\r\n\r\n\r\n#container {\r\n  flex: 1;\r\n  display: flex;\r\n}\r\n\r\n#leftPanel {\r\n  flex: 0.6;\r\n  background-color: rgb(255, 255, 255);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#home {\r\n  padding: 4px 10px 0px 10px;\r\n  height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#home h2 {\r\n  position: relative;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n#home h2::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #202021; /* 下划线颜色 */\r\n}\r\n\r\n/* 每个菜单项的通用样式 */\r\n.menu-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex: 1; /* 每个菜单项占用相等的空间 */\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  margin: 0 5px; /* 菜单项之间的间距 */\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  transition: background-color 0.3s, color 0.3s;\r\n  color: #333; /* 默认文字颜色 */\r\n  background-color: #ffe3e1;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.menu-item:hover {\r\n  background-color: #ffb4ad;\r\n}\r\n\r\n.menu-item.active {\r\n  background-color: #ff9187;\r\n}\r\n\r\n#projects {\r\n  flex: 1;\r\n  padding: 0px 10px;\r\n  height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#projects h2 {\r\n  position: relative;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n#projects h2::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #202021; /* 下划线颜色 */\r\n}\r\n\r\n.project-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 10px;\r\n  text-align: center;\r\n  padding: 10px 20px;\r\n  margin: 0 5px; /* 菜单项之间的间距 */\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  transition: background-color 0.3s, color 0.3s;\r\n  color: #333; /* 默认文字颜色 */\r\n  background-color: #ffe3e1;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.project-item:hover {\r\n  background-color: #ffb4ad;\r\n}\r\n\r\n.project-item.active {\r\n  background-color: #ff9187;\r\n}\r\n\r\n.project-menu-icon {\r\n  fill: #333; /* 设置图标颜色 */\r\n  cursor: pointer; /* 鼠标悬停时变成指针 */\r\n  transition: fill 0.3s; /* 添加过渡效果 */\r\n}\r\n\r\n.project-menu-icon:hover {\r\n  fill: #f5dcd6; /* 鼠标悬停时改变颜色 */\r\n}\r\n\r\n#rightPanel {\r\n  flex: 2;\r\n  background-color: #f5f5f5;\r\n  padding: 10px 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#homeorProjectTitle {\r\n  height: 90px;\r\n  background-color: #ff9187;\r\n  color: #f4f4f4;\r\n  font-size: 3rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n#addTask {\r\n  margin-top: 10px;\r\n  height: 40px;\r\n  background-color: #ffeeec;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n#addTask span {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#addTask:hover {\r\n  background-color: #ffd9d6;\r\n}\r\n\r\n#AddTaskCard {\r\n  padding: 10px 8px;\r\n  background-color: #ffffff;\r\n  height: 310px;\r\n  transform: translateY(20px);\r\n  animation: fadeInDown 0.5s forwards;\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n#taskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n#taskForm input[type=\"text\"],\r\n#taskForm input[type=\"date\"],\r\n#taskForm textarea {\r\n  width: 100%-10px;\r\n  padding: 5px;\r\n  font-size: 1rem;\r\n  border: 2px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: border-color 0.3s ease;\r\n}\r\n\r\n#taskForm input[type=\"text\"]:focus,\r\n#taskForm input[type=\"date\"]:focus,\r\n#taskForm textarea:focus {\r\n  border-color: #ffb1a9; /* 聚焦时的边框颜色 */\r\n  outline: none;\r\n}\r\n\r\n#taskForm textarea {\r\n  resize: vertical; /* 允许用户调整文本区域的大小 */\r\n}\r\n\r\n/* 按钮容器样式（可选） */\r\n#taskForm.buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px; /* 按钮之间的间距 */\r\n  margin-top: 4px;\r\n}\r\n\r\n/* 通用按钮样式 */\r\n#taskForm.buttons button {\r\n  padding: 8px 16px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: #000000;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease,\r\n    box-shadow 0.3s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* 取消按钮样式 */\r\n.Cancel {\r\n  background-color: #e74c3c; /* 鲜艳的红色 */\r\n}\r\n\r\n.Cancel:hover {\r\n  background-color: #c0392b; /* 深红色 */\r\n}\r\n\r\n.Cancel:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* 提交按钮样式 */\r\n.submit {\r\n  background-color: #2ecc71; /* 亮绿色 */\r\n}\r\n\r\n.submit:hover {\r\n  background-color: #27ae60; /* 深绿色 */\r\n}\r\n\r\n.submit:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.important-toggle {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  border-radius: 5px;\r\n  background-color: #d3d5d7; /* 未选中时的背景色 */\r\n  color: #fff;\r\n  font-weight: bold;\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n  position: relative; /* 为绝对定位的伪元素提供参考 */\r\n  height: 30px;\r\n  width: 200px;\r\n}\r\n\r\n.important-toggle input[type=\"checkbox\"] {\r\n  opacity: 0; /* 透明度为0 */\r\n  position: absolute; /* 绝对定位 */\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer; /* 确保点击区域覆盖整个按钮 */\r\n}\r\n\r\n/* Span 用于显示文本和图标 */\r\n.important-toggle span {\r\n  pointer-events: none; /* 防止点击事件穿透到文本 */\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n/* 选中状态的样式 */\r\n.important-toggle input[type=\"checkbox\"]:checked + span {\r\n  background-color: #e74c3c; /* 选中时的背景色 */\r\n  color: #fff; /* 文字颜色 */\r\n}\r\n\r\n/* 添加图标或其他视觉效果 */\r\n.important-toggle input[type=\"checkbox\"]:checked + span::before {\r\n  content: \"✔ \";\r\n  margin-right: 5px;\r\n}\r\n\r\n#addProjectDiv {\r\n  margin-top: 10px;\r\n  height: 30px;\r\n  background-color: #ffeeec;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n#addProjectDiv span {\r\n  font-size: 1rem;\r\n}\r\n\r\n#addProjectDiv:hover {\r\n  background-color: #ffd9d6;\r\n}\r\n\r\n#projectForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n/* 按钮容器样式（可选） */\r\n#projectForm.buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5px; /* 按钮之间的间距 */\r\n  margin-top: 2px;\r\n}\r\n\r\n/* 通用按钮样式 */\r\n#projectForm.buttons button {\r\n  padding: 5px 10px;\r\n  border-radius: 2px;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease,\r\n    box-shadow 0.3s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.projectCancel {\r\n  background-color: #e74c3c; /* 鲜艳的红色 */\r\n}\r\n\r\n.projectCancel:hover {\r\n  background-color: #c0392b; /* 深红色 */\r\n}\r\n\r\n.projectCancel:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.projectsubmit {\r\n  background-color: #2ecc71; /* 亮绿色 */\r\n}\r\n\r\n.projectsubmit:hover {\r\n  background-color: #27ae60; /* 深绿色 */\r\n}\r\n\r\n.projectsubmit:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#projectForm input[type=\"text\"] {\r\n  margin-top: 3px;\r\n  width: 100%-5px;\r\n  padding: 5px;\r\n  font-size: 0.8rem;\r\n  border: 2px solid #ccc;\r\n  border-radius: 5px;\r\n  transition: border-color 0.3s ease;\r\n  height: 20px;\r\n}\r\n\r\n#projectForm input[type=\"text\"]:focus,\r\n#projectForm input[type=\"date\"]:focus,\r\n#projectForm textarea:focus {\r\n  border-color: #ffb1a9; /* 聚焦时的边框颜色 */\r\n  outline: none;\r\n}\r\n\r\n#tasksDiv {\r\n  margin-top: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n}\r\n\r\n.taskDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ff9f9f;\r\n  border-radius: 5px;\r\n  background-color: #ffe3e3;\r\n  position: relative;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.taskDiv:hover {\r\n  background-color: #ffc0c0;\r\n}\r\n\r\n.leftTaskDiv {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.rightTaskDiv {\r\n  text-align: right;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  gap: 5px;\r\n}\r\n\r\n/* 日期样式 */\r\n.taskDate {\r\n  font-size: 0.9em;\r\n  color: #888;\r\n  margin-bottom: 5px;\r\n  width: 100px;\r\n}\r\n\r\n/* 按钮样式 */\r\n.completeBtn,\r\n.editBtn,\r\n.deleteBtn {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  margin: 0;\r\n  transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.completeBtn,\r\n.editBtn,\r\n.deleteBtn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n/* 编辑和删除按钮样式 */\r\n.editBtn,\r\n.deleteBtn {\r\n  font-size: 1.2em;\r\n  color: #555;\r\n  padding: 5px;\r\n}\r\n\r\n.editBtn:hover,\r\n.deleteBtn:hover {\r\n  color: #000;\r\n}\r\n\r\n/* 完成按钮样式 */\r\n.completeBtn {\r\n  font-size: 1.5em;\r\n  margin-right: 5px;\r\n}\r\n\r\n/* 详情样式 */\r\n.rightTaskDiv p {\r\n  margin: 0;\r\n  font-size: 0.9em;\r\n  color: #555;\r\n}\r\n\r\n.details {\r\n  font-size: 1rem;\r\n  border: 1px solid rgb(255, 155, 150);\r\n  color: #ffffff;\r\n  background-color: rgb(255, 155, 150); /* 添加背景色 */\r\n  padding: 5px 10px; /* 增加一些内边距 */\r\n  border-radius: 5px; /* 圆角边框 */\r\n  cursor: pointer; /* 鼠标变成手型 */\r\n  transition: background-color 0.3s ease, transform 0.2s ease-in-out; /* 平滑的过渡效果 */\r\n}\r\n\r\n/* 鼠标悬停效果 */\r\n.details:hover {\r\n  background-color: rgb(255, 100, 95); /* 改变背景色 */\r\n  border-color: rgb(255, 100, 95); /* 改变边框色 */\r\n  color: #ffffff; /* 保持字体颜色 */\r\n}\r\n\r\n/* 鼠标按下激活效果 */\r\n.details:active {\r\n  transform: scale(0.95); /* 点击时缩小按钮 */\r\n  background-color: rgb(220, 90, 85); /* 进一步改变背景色 */\r\n  border-color: rgb(220, 90, 85); /* 进一步改变边框色 */\r\n}\r\n\r\n#taskTitle {\r\n  color: #ff7272;\r\n}\r\n\r\n.completedTitle {\r\n  text-decoration: line-through !important;\r\n  z-index: 1;\r\n}\r\n\r\n/* 模态窗口整体样式 */\r\n.modal {\r\n  display: none; /* 默认隐藏 */\r\n  position: fixed;\r\n  z-index: 1000; /* 确保模态窗口在最前面 */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto; /* 允许滚动 */\r\n  background-color: rgba(0, 0, 0, 0.5); /* 黑色背景，透明度为0.5 */\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n/* 显示模态窗口时的样式 */\r\n.modal.show {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n/* 模态窗口内容样式 */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 10% auto; /* 垂直居中 */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%; /* 宽度可根据需要调整 */\r\n  max-width: 500px; /* 最大宽度 */\r\n  border-radius: 5px;\r\n  position: relative;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n  animation: fadeInDown 0.5s forwards;\r\n}\r\n\r\n/* 关闭按钮样式 */\r\n.modal-content .closeBtn {\r\n  color: #aaa;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-content .closeBtn:hover,\r\n.modal-content .closeBtn:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n/* 表单按钮容器样式 */\r\n.buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#editTaskForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n/* 通用按钮样式 */\r\n.buttons button {\r\n  margin-left: 10px;\r\n  padding: 8px 16px;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  transition: background-color 0.3s ease, transform 0.2s ease-in-out,\r\n    box-shadow 0.3s ease;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* 取消按钮样式 */\r\n.editButtons .cancelBtn {\r\n  background-color: #e74c3c; /* 鲜艳的红色 */\r\n  color: #fff;\r\n}\r\n\r\n.editButtons .cancelBtn:hover {\r\n  background-color: #c0392b; /* 深红色 */\r\n}\r\n\r\n.editButtons .cancelBtn:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* 提交按钮样式 */\r\n.editButtons .submitBtn {\r\n  background-color: #2ecc71; /* 亮绿色 */\r\n  color: #fff;\r\n}\r\n\r\n.editButtons .submitBtn:hover {\r\n  background-color: #27ae60; /* 深绿色 */\r\n}\r\n\r\n.editButtons .submitBtn:active {\r\n  transform: scale(0.98);\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* 添加动画效果 */\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/* Required field indicator */\r\n.required {\r\n  color: red;\r\n}\r\n\r\n.detilesModalContent {\r\n  background-color: #fefefe;\r\n  margin: 10% auto; /* 垂直居中 */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 50%; /* 宽度可根据需要调整 */\r\n  max-width: 500px; /* 最大宽度 */\r\n  border-radius: 5px;\r\n  position: relative;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\r\n  animation: fadeInDown 0.5s forwards;\r\n  border: 2px solid rgb(255, 156, 156);\r\n}\r\n\r\n/* 关闭按钮样式 */\r\n.detilesModalContent .closeBtn {\r\n  color: #aaa;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 15px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n\r\n.detilesModalContent .closeBtn:hover,\r\n.detilesModalContent .closeBtn:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n#optionsBox {\r\n  display: none; /* 初始隐藏 */\r\n  position: absolute;\r\n  background-color: #ffffff; /* 背景颜色 */\r\n  border-radius: 8px; /* 圆角 */\r\n  border: 1px solid #ddd; /* 边框 */\r\n  padding: 15px; /* 内边距 */\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */\r\n  z-index: 1000; /* 确保在其他元素上方 */\r\n  transition: opacity 0.3s ease; /* 过渡效果 */\r\n}\r\n\r\n#optionsBox button {\r\n  display: block; /* 每个按钮占一行 */\r\n  width: 100%; /* 按钮宽度 */\r\n  padding: 10px; /* 内边距 */\r\n  margin: 5px 0; /* 按钮之间的间距 */\r\n  border: none; /* 无边框 */\r\n  border-radius: 5px; /* 圆角 */\r\n  background-color: #ff8478; /* 按钮颜色 */\r\n  color: white; /* 按钮文字颜色 */\r\n  font-size: 1rem; /* 字体大小 */\r\n  cursor: pointer; /* 鼠标指针效果 */\r\n  transition: background-color 0.3s ease; /* 悬停效果过渡 */\r\n}\r\n\r\n#optionsBox button:hover {\r\n  background-color: #ff7654; /* 悬停时改变颜色 */\r\n}\r\n\r\n#projectRenameBox {\r\n  z-index: 2;\r\n  position: absolute; /* 基于父元素进行定位 */\r\n  top: 100%; /* 顶部位置设置为 100%，表示紧跟在父元素底部 */\r\n  left: 0; /* 左对齐 */\r\n  background-color: white; /* 背景颜色 */\r\n  padding: 10px; /* 内边距 */\r\n  border: 1px solid #ccc; /* 边框 */\r\n  border-radius: 4px; /* 圆角 */\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影 */\r\n  width: 100%; /* 宽度与父元素一致 */\r\n  box-sizing: border-box; /* 确保内边距不会影响宽度 */\r\n}\r\n\r\n#projectRenameBox input[type=\"text\"] {\r\n  width: 100%;\r\n  padding: 8px;\r\n  margin-top: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#projectRenameBox button {\r\n  padding: 5px 10px;\r\n  margin-top: 5px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  width: 80%;\r\n  gap: 20px;\r\n}\r\n\r\n#projectRenameBox .buttons {\r\n  display: flex;\r\n}\r\n\r\n#proSubmitRename {\r\n  background-color: #4caf50;\r\n  color: white;\r\n}\r\n\r\n#proCancelRename {\r\n  background-color: #f44336;\r\n  color: white;\r\n  margin-top: 10px;\r\n}\r\n\r\n#projectRenameBox button:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.project-title {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.project-icons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.project-icons svg {\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.project-icons svg:hover {\r\n  opacity: 0.7;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/api.js":
/*!****************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/api.js ***!
  \****************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***********************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***********************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../../tongshiyu/My-To-Do/src/styles.css":
/*!***********************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/styles.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "../../tongshiyu/My-To-Do/node_modules/css-loader/dist/cjs.js!../../tongshiyu/My-To-Do/src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*******************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*******************************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*********************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*********************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*********************************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!**************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!********************************************************************************************!*\
  !*** ../../tongshiyu/My-To-Do/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \********************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../../tongshiyu/My-To-Do/src/dom.js":
/*!*******************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/dom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "../../tongshiyu/My-To-Do/src/project.js");
/* harmony import */ var _eventLister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventLister */ "../../tongshiyu/My-To-Do/src/eventLister.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "../../tongshiyu/My-To-Do/src/task.js");
// dom.js




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
    const projects = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList;

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
      _eventLister__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectItemClickListener(projectDiv); // 绑定点击事件

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

      _task__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(title, details, date, important, projectIndex); // 添加新的任务到当前项目

      renderTaskToRightPanel(projectIndex, currentIsHomeMenu); // 传递 currentIsHomeMenu

      // 清空输入框
      taskForm.reset();

      // 移除添加任务卡片
      rightPanel.removeChild(popAddTaskCard);
    });
  }

  function addEventToProject(title, details, date, projectIndex) {
    // 将表单中添加的任务加入项目并渲染
    _task__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(title, details, date, projectIndex);
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
      for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.length; i++) {
        if (_project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[i].tasks) {
          _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[i].tasks.forEach((task, index) => {
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
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex] &&
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].tasks
      ) {
        _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].tasks.forEach((task, index) => {
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
    const project = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex];
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
    const project = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex];
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
    _task__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectIndex, taskIndex);
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
    _task__WEBPACK_IMPORTED_MODULE_2__["default"].toggleTaskComplted(projectIndex, taskIndex); // 确保函数名与 tasks 模块一致
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

    _project__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectTitle);
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
    project.setAttribute("data-index", _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.length - 1); // 在dom元素设置data-index存储索引值
    renderRemoveAddProjectCard();
    renderRemoveAddProjectDiv();
    projectsMenu.appendChild(project);
    renderAddProjectDiv();
    _eventLister__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectItemClickListener(project); // 绑定点击事件

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
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].renameProject(projectIndex, newTitle); // 更新项目数据
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
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(projectIndex);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "../../tongshiyu/My-To-Do/src/eventLister.js":
/*!***************************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/eventLister.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "../../tongshiyu/My-To-Do/src/dom.js");
// eventListener.js



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
        _dom__WEBPACK_IMPORTED_MODULE_0__["default"].renderHomeorProjectPage(item); // 传递当前菜单项的元素
      });
    });

    // 为所有项目项添加点击事件监听器
    projectItems.forEach((item) => {
      addProjectItemClickListener(item);
    });
  }

  // 为项目添加点击事件监听器
  function addProjectItemClickListener(projectItem) {
    projectItem.addEventListener("click", () => {
      setActiveItem(projectItem);
      // 假设 renderHomeorProjectPage 需要项目标题作为参数
      _dom__WEBPACK_IMPORTED_MODULE_0__["default"].renderHomeorProjectPage(projectItem);
    });
  }

  return {
    listenClick,
    addProjectItemClickListener,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListener);


/***/ }),

/***/ "../../tongshiyu/My-To-Do/src/project.js":
/*!***********************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/project.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "../../tongshiyu/My-To-Do/src/task.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "../../tongshiyu/My-To-Do/src/task.js":
/*!********************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "../../tongshiyu/My-To-Do/src/project.js");


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
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].tasks.push(newTask);
    _project__WEBPACK_IMPORTED_MODULE_0__["default"].saveProjects(); // 保存
  }

  function deleteTask(projectIndex,taskIndex){//从目标项目中删除任务
    if(projectIndex>-1){
      _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].tasks.splice(taskIndex, 1);
      _project__WEBPACK_IMPORTED_MODULE_0__["default"].saveProjects(); // 保存
    }
  }

  function toggleTaskComplted(projectIndex,taskIndex){
    if (projectIndex > -1) {
      const task = _project__WEBPACK_IMPORTED_MODULE_0__["default"].projectList[projectIndex].tasks[taskIndex];
      task.completed = !task.completed; // 切换任务的完成状态
      _project__WEBPACK_IMPORTED_MODULE_0__["default"].saveProjects(); // 保存
    }
  }

  return {
    addTask,
    deleteTask,
    toggleTaskComplted,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ../../tongshiyu/My-To-Do/src/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventLister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventLister */ "../../tongshiyu/My-To-Do/src/eventLister.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "../../tongshiyu/My-To-Do/src/dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "../../tongshiyu/My-To-Do/src/styles.css");





_eventLister__WEBPACK_IMPORTED_MODULE_0__["default"].listenClick();
_dom__WEBPACK_IMPORTED_MODULE_1__["default"].renderAddProjectDiv();
_dom__WEBPACK_IMPORTED_MODULE_1__["default"].renderProjectsMenu();
// localStorage.clear();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map