document.getElementById("btnSwitch").addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    document.body.style.backgroundImage =
      "url(assets/background-2732x1536.png)";
    document.getElementById("main").classList.remove("bg-dark");
    document.getElementById("main").classList.add("bg-white");
    document.getElementById("btnSwitchIcon").className = "fa-solid fa-moon";
    const allFooters = document.getElementsByClassName("card-footer");
    for (let i = 0; i < allFooters.length; i++) {
      allFooters[i].querySelector(".btn").className = "btn btn-dark";
    }
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document.body.style.backgroundImage =
      "url(assets/background-dark-2732x1536.png)";
    document.getElementById("main").classList.remove("bg-white");
    document.getElementById("main").classList.add("bg-dark");
    document.getElementById("btnSwitchIcon").className = "fa-solid fa-sun";
    const allFooters = document.getElementsByClassName("card-footer");
    for (let i = 0; i < allFooters.length; i++) {
      allFooters[i].querySelector(".btn").className = "btn btn-light";
    }
  }
});
