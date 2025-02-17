let workTabs = document.querySelectorAll(".portfolio .tabs li");
let shuffleImgs = document.querySelectorAll(".portfolio .shuffle-img img");
workTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    workTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    shuffleImgs.forEach((img) => {
      if (img.classList.contains(tab.dataset.category)) {
        img.style.opacity = 1;
      } else {
        img.style.opacity = 0.08;
      }
    });
  });
});
