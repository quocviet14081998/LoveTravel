const IconNav = document.querySelector(".header__nav-menu__icon");
const IconSidebar = document.querySelector(".header__sidebar-icon");
const headerSide = document.querySelector(".header__sidebar");

IconNav.addEventListener("click", () => {
  headerSide.classList.add("active");
});

IconSidebar.addEventListener("click", () => {
  headerSide.classList.remove("active");
});

// Beaches
window.addEventListener("load", function () {
  const slider = document.querySelector(".beaches__slider");
  const sliderMain = document.querySelector(".beaches__slider-main");
  const sliderItems = document.querySelectorAll(".beaches__slider-item");
  const prevBtn = document.querySelector(".beaches__slider-prev");
  const nextBtn = document.querySelector(".beaches__slider-next");
  const dotItem = document.querySelectorAll(".beaches__slider-dot__item");
  let nextWidth = 0;
  let index = 0;

  console.log(nextWidth);

  //kiểm tra độ rộng của từng item
  const sliderItemWidth = sliderItems[0].offsetWidth;
  // console.log("sliderItemWidth", sliderItemWidth);

  nextBtn.addEventListener("click", function () {
    HandleChangeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    HandleChangeSlide(-1);
  });

  function HandleChangeSlide(param) {
    if (param == 1) {
      if (index >= sliderItems.length - 1) {
        index = sliderItems.length - 1;
        return;
      }
      nextWidth = nextWidth - sliderItemWidth;
      // console.log("HandleChangeSlide ~ nextWidth", nextWidth );
      sliderMain.style = `transform: translateX(${nextWidth}px)`;
      index++;
    } else if (param == -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      nextWidth = nextWidth + sliderItemWidth;
      sliderMain.style = `transform: translateX(${nextWidth}px)`;
      index--;
    }
    dotItem.forEach(function (remove) {
      remove.classList.remove("active");
    });
    dotItem[index].classList.add("active");
  }

  dotItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      dotItem.forEach(function (remove) {
        remove.classList.remove("active");
      });
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      nextWidth = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${nextWidth}px)`;
    });
  });
});

// Sidebar mobile
const iconMenu = document.querySelector(".header__menu-mobile i");
const iconCLodeMenuMobile = document.querySelector(".header__sidebar-mobile i");
const headerSideMobile = document.querySelector(".header__sidebar-mobile");

iconMenu.addEventListener("click", () => {
  headerSideMobile.classList.add("active");
});

iconCLodeMenuMobile.addEventListener("click", () => {
  headerSideMobile.classList.remove("active");
});
