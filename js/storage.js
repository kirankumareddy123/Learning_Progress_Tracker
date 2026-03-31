const STORAGE_KEY_TOPICS = "learningProgressTopics";
const STORAGE_KEY_PREFERENCES = "learningProgressPrefs";

export function loadTopics() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TOPICS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveTopics(topics) {
  try {
    localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(topics));
  } catch {
  }
}

export function loadPreferences() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFERENCES);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function savePreferences(prefs) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFERENCES, JSON.stringify(prefs));
  } catch {
  }
}

