function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const toggle = document.getElementById("themeToggle");
  toggle.innerHTML = newTheme === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || "dark";
  html.setAttribute("data-theme", theme);

  const toggle = document.getElementById("themeToggle");
  toggle.innerHTML = theme === "dark" ? "☀️" : "🌙";
});
