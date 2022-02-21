"use strict";

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

function toggleTheme() {
  var stored_theme = document.getElementById("theme").href;
  console.log(stored_theme.href);
  if (stored_theme.match("main.css")) {
      document.getElementById("theme").href = "main2.css";
      localStorage.setItem("theme", "main2.css");
  }
  else {
      document.getElementById("theme").href = "main.css";
      localStorage.setItem("theme", "main.css");
  }
}

window.onload = function () {
  if (localStorage.getItem("theme") === null) {
      document.getElementById("theme").href = "main.css";
  }
  else {
      document.getElementById("theme").href = localStorage.getItem("theme");
  }
};
