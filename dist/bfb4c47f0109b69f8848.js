import eventLister from "./eventLister";
import dom from "./dom";
import "./styles.css";


eventLister.listenClick();
dom.renderAddProjectDiv();
dom.renderProjectsMenu();
// localStorage.clear();