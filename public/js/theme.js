function changeTheme() {
  const element = document.documentElement;
  const currentTheme = element.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`
    )
  );
  document.head.appendChild(css);

  if (newTheme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }

  // Force reflow
  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);

  // Save theme to sessionStorage
  sessionStorage.setItem('theme', newTheme);
}

function preloadTheme() {
  const theme = (() => {
    // Retrieve theme from sessionStorage
    const userTheme = sessionStorage.getItem('theme');
    // Default to dark theme if no preference is set
    if (userTheme === "light" || userTheme === "dark") {
      return userTheme;
    } else {
      return "dark";
    }
  })();

  const element = document.documentElement;

  if (theme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }

  // Save theme to sessionStorage
  sessionStorage.setItem('theme', theme);
}

window.onload = () => {
  function initializeThemeButtons() {
    const headerThemeButton = document.getElementById("header-theme-button");
    const drawerThemeButton = document.getElementById("drawer-theme-button");
    headerThemeButton?.addEventListener("click", changeTheme);
    drawerThemeButton?.addEventListener("click", changeTheme);
  }

  document.addEventListener("astro:after-swap", initializeThemeButtons);
  initializeThemeButtons();
}

document.addEventListener("astro:after-swap", preloadTheme);

preloadTheme();