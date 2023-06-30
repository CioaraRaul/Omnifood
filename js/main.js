// const h1 = document.querySelector(".heading-primary");
// console.log(h1);
// const originalText = h1.textContent;
// let clicked;
// h1.addEventListener("click", () => {
//   h1.textContent = "Cioara Raul";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
//   clicked = true;
//   console.log(clicked);
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// make mobile nav works

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefEl = link.getAttribute("href");

    // scroll back to top
    if (hrefEl === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (hrefEl !== "#" && hrefEl.startsWith("#")) {
      const sectionEl = document.querySelector(hrefEl);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

// fixing flexbox gap property missing in some Safari versions
function chackFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
chackFlexGap();
