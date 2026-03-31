export function calculateProgress(topics) {
  const total = topics.length;
  const completed = topics.filter((t) => t.status === "Completed").length;
  const inProgress = topics.filter((t) => t.status === "In Progress").length;
  const pending = total - completed - inProgress;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { total, completed, inProgress, pending, percent };
}

export function updateProgressUI(metrics) {
  const totalEl = document.getElementById("totalTopics");
  const completedEl = document.getElementById("completedTopics");
  const inProgressEl = document.getElementById("inProgressTopics");
  const pendingEl = document.getElementById("pendingTopics");
  const progressBar = document.getElementById("progressBar");
  const percentText = document.getElementById("progressPercentText");

  if (!totalEl) return;

  totalEl.textContent = metrics.total;
  completedEl.textContent = metrics.completed;
  inProgressEl.textContent = metrics.inProgress;
  pendingEl.textContent = metrics.pending;
  percentText.textContent = `${metrics.percent}%`;

  if (progressBar) {
    const targetWidth = metrics.percent;
    progressBar.classList.toggle("progress-bar-inner--active", targetWidth > 0);
    progressBar.style.transition = "width 0.5s ease-out";
    requestAnimationFrame(() => {
      progressBar.style.width = `${targetWidth}%`;
    });
  }
}

