
// // @copyright ajayprathapsingh
// // @aham_ajay <ajaypratapsingh8102003@getMaxListeners.com>


// "use strict";



// // light and daek theme


// const $themeBtn = document.querySelector("[data-theme-btn]");
// const $HTML = document.documentElement;
// let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
// if(sessionStorage.getItem("theme"))
// {
//     $HTML.dataset.theme = sessionStorage.getItem("theme");

// }
// else{
//     $HTML.dataset.theme = isDark ? "dark" : "light";
//     sessionStorage.setItem("theme", $HTML.dataset.theme);
// }

// const changeTheme = () => {
//     $HTML.dataset.theme = sessionStorage.getItem("theme") == "light" ? "dark": "light";
//     sessionStorage.setItem("theme", $HTML.dataset.theme);
    

// }
// $themeBtn.addEventListener("click", changeTheme);
// // window.addEventListener("load", () => $themeBtn.addEventListener("click"));

// // TAB

// const $tabBtn = document.querySelectorAll("[data-tab-btn]");
// let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
// let [lastActiveTabBtn] = $tabBtn;

// $tabBtn.forEach(item=>{
//     item.addEventListener("click",function(){
//         lastActiveTab.classList.remove("active");
//         lastActiveTab.classList.remove("active");

//         const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
//         $tabContent.classList.add("active");
//         this.classList.add("active");

//         lastActiveTab = $tabContent;
//         lastActiveTab = this;

//     });
// });



// @copyright ajayprathapsingh
// @aham_ajay <ajaypratapsingh8102003@getMaxListeners.com>

"use strict";

/* -------------------------------
   🌗 Light & Dark Theme Toggle
-------------------------------- */

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;

let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
  const current = sessionStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";
  $HTML.dataset.theme = next;
  sessionStorage.setItem("theme", next);
};

if ($themeBtn) {
  $themeBtn.addEventListener("click", changeTheme);
}

/* -------------------------------
   📑 Tabs
-------------------------------- */

const $tabBtn = document.querySelectorAll("[data-tab-btn]");
const $tabContent = document.querySelectorAll("[data-tab-content]");

if ($tabBtn.length && $tabContent.length) {
  // Start with first tab as active
  let lastActiveTab = $tabBtn[0];
  let lastActiveContent = $tabContent[0];

  $tabBtn.forEach((btn) => {
    btn.addEventListener("click", function () {

      // Deactivate previous active tab + content
      lastActiveTab.classList.remove("active");
      lastActiveContent.classList.remove("active");

      // Find and activate the new tab content
      const targetContent = document.querySelector(
        `[data-tab-content="${this.dataset.tabBtn}"]`
      );

      // Activate clicked button and its matching content
      this.classList.add("active");
      targetContent.classList.add("active");

      // Update trackers
      lastActiveTab = this;
      lastActiveContent = targetContent;
    });
  });
}

