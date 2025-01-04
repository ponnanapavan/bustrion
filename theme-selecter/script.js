let obj = {
  color: "",
  background: "",
};

let temp = {};
const custombackground = document.getElementById("custom-background");
const customcolor = document.getElementById("custom-text-color");

custombackground.addEventListener("input", function () {
  if (!localStorage.getItem("custom-theme")) {
    temp = { ...obj };
  } else {
    let data = JSON.parse(localStorage.getItem("custom-theme"));
    temp = { ...data };
  }

  temp["background"] = custombackground.value;
  localStorage.setItem("custom-theme", JSON.stringify(temp));
});

customcolor.addEventListener("input", function () {
  if (!localStorage.getItem("custom-theme")) {
    temp = { ...obj };
  } else {
    let data = JSON.parse(localStorage.getItem("custom-theme"));
    temp = { ...data };
  }

  temp["color"] = customcolor.value;
  localStorage.setItem("custom-theme", JSON.stringify(temp));
});

const toggleTheme = document.getElementById("toggle-theme");
const heading = document.getElementById("h1-heading");
const togglecustom = document.getElementById("toggle-custom");

toggleTheme.addEventListener("click", function () {
  localStorage.removeItem("custom-theme");
  document.body.classList.toggle("dark-theme");

  addToLocalStorage();
});

function addToLocalStorage() {
  const checkDarkTheme = document.body.classList.contains("dark-theme");

  if (checkDarkTheme) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.removeItem("theme");
  }
}

function checkWhetherDarkTheme() {
  const checkDarkTheme = localStorage.getItem("theme");

  if (checkDarkTheme === "dark-theme") {
    document.body.classList.add("dark-theme");
  }
}

checkWhetherDarkTheme();
togglecustom.addEventListener("click", function () {
  const data = JSON.parse(localStorage.getItem("custom-theme"));

  if (data) {
    document.body.style.backgroundColor = data.background || "white";
    heading.style.color = data.color || "black";
  } else {
    document.body.style.backgroundColor = "white";
    heading.style.color = "black";
  }
});
