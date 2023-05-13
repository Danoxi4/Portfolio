const bodyskin = document.querySelectorAll(".body-skin"),
  totalBodySkin = bodyskin.length;

for (let i = 0; i < totalBodySkin; i++) {
  bodyskin[i].addEventListener("change", function () {
    if (this.value === "light") {
      document.body.className = "light";
   
    } else {
      document.body.className = "";
    }
  });
}

