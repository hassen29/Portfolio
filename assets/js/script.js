const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

// Function to show a section
function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    const targetElement = document.querySelector("#" + target);

    if (!targetElement) {
        console.error("Target element not found:", target);
        return;
    }

    removeBackSection();
    allSection.forEach(sec => sec.classList.remove("active"));
    targetElement.classList.add("active");
}

// Remove back-section class from all sections
function removeBackSection() {
    allSection.forEach(sec => sec.classList.remove("back-section"));
}

// Add back-section class to a section by index
function addBackSection(index) {
    allSection[index].classList.add("back-section");
}

// Update navigation active class
function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];
    navList.forEach(li => {
        const a = li.querySelector("a");
        a.classList.remove("active");
        if (a.getAttribute("href").split("#")[1] === target) {
            a.classList.add("active");
        }
    });
}

// Add click listeners to all nav links
navList.forEach(li => {
    const a = li.querySelector("a");
    a.addEventListener("click", function(e) {
        e.preventDefault();
        navList.forEach(li => li.querySelector("a").classList.remove("active"));
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) asideSectionTogglerBtn();
    });
});

// Add click listener to the logo link
document.querySelector(".logo a").addEventListener("click", function(e) {
    e.preventDefault();
    showSection(this); // scroll/show the home section
    updateNav(this);   // update nav highlighting
});

// Hire-me button
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

// Nav toggler for responsive
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach(sec => sec.classList.toggle("open"));
}
