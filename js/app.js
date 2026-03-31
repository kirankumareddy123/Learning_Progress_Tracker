import { loadTopics } from "./storage.js";
import { initUI } from "./ui.js";

window.addEventListener("DOMContentLoaded", () => {
  const topics = loadTopics();
  initUI(topics);
});

