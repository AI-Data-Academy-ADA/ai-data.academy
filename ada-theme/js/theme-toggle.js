(function() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || "dark";
  html.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  } else {
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
  
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.innerHTML = newTheme === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.innerHTML = document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
});
