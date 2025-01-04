let obj = {
  color: "",
  background: "",
};

var temp = {};

const custombackground = document.getElementById("custom-background");

const customcolor = document.getElementById("custom-text-color");

custombackground.addEventListener("input", function () {
  if (!localStorage.getItem("custom-theme")) {
    temp = { ...obj };
    temp["background"] = custombackground.value;
  } else {
    let data = JSON.parse(localStorage.getItem("custom-theme"));
    temp = { ...data };
    temp["background"] = custombackground.value;
  }
  localStorage.setItem("custom-theme", JSON.stringify(temp));
});

customcolor.addEventListener("input", function () {
  if (!localStorage.getItem("custom-theme")) {
    temp = { ...obj };
    temp["color"] = customcolor.value;
  } else {
    let data = JSON.parse(localStorage.getItem("custom-theme"));
    temp = { ...data };
    temp["color"] = customcolor.value;
  }
  localStorage.setItem("custom-theme", JSON.stringify(temp));
});
