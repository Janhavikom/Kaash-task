window.addEventListener("scroll", function () {
  let menu = document.getElementById("menu-bar");
  if (window.pageYOffset > 300) {
    menu.setAttribute("class", "sticky");
    document.body.style.backgroundColor = "white";
    menu.style.cssText += "color:white;background-color:black;"

  } else {
    menu.classList.remove("sticky");
    document.body.style.backgroundColor = "black";
    menu.style.cssText += "color:black;background-color:white;"
  }
});
