// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("opacity-0");
  setTimeout(() => preloader.style.display = "none", 1000);
});

// Aside Navbar
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSectionId = this.getAttribute("href").split("#")[1];

    removeBackSectionClass();
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSectionClass(j);
      }
    }

    this.classList.add("active");
    showSection(targetSectionId);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  allSections.forEach(section => section.classList.remove("back-section"));
}

function addBackSectionClass(index) {
  allSections[index].classList.add("back-section");
}

function showSection(sectionId) {
  allSections.forEach(section => section.classList.remove("active"));
  const targetSection = document.querySelector(`#${sectionId}`);
  targetSection.classList.add("active");
  updateNav(targetSection);
}

function updateNav(currentSection) {
  const targetSectionId = currentSection.getAttribute("id");
  navList.forEach(navItem => {
    const navItemLink = navItem.querySelector("a");
    const navItemLinkSectionId = navItemLink.getAttribute("href").split("#")[1];
    navItemLink.classList.toggle("active", navItemLinkSectionId === targetSectionId);
  });
}

document.querySelector(".hire-me").addEventListener("click", function (event) {
  event.preventDefault();
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(`section-${sectionIndex}`);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  allSections.forEach(section => section.classList.toggle("open"));
}
