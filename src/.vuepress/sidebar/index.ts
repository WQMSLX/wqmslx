import { sidebar } from "vuepress-theme-hope";

import { studySidebar } from "./study.js";

import { projectSidebar } from "./project.js";
import { developSidebar } from "./develop.js";
export const Sidebar = sidebar({
  "/study/": studySidebar,
  "/develop/": developSidebar,
  "/project/": projectSidebar,
});
