"use strict";
(self["webpackChunkvscode_eslint_example"] = self["webpackChunkvscode_eslint_example"] || []).push([["dropdown"],{

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Dropdown {
  constructor() {
    this.initializeDom();
    this.cacheDom();
    this.initializeDropdown();
  }

  cacheDom() {
    this.body = document.querySelector('body');
    this.dropdowns = document.querySelector('.dropdown-script');
    this.toggleButton = document.querySelector('.dropdown-toggle');
    this.dropdownContent = document.querySelector('.dropdown-content');
  }

  initializeDom() {
    this.body = document.querySelector('body');
    this.body.innerHTML += `
    <div class="dropdown">
      <button>Food Hover</button>
      <div class="content">
        <a href="">Apple</a>
        <a href="">Banana</a>
        <a href="">Orange</a>
      </div>
    </div>
    <div class="dropdown-script">
      <button class='dropdown-toggle'>Food Click</button>
      <div class="dropdown-content">
        <a href="">Apple</a>
        <a href="">Banana</a>
        <a href="">Orange</a>
      </div>
    </div>`;
  }

  initializeDropdown() {
    this.toggleButton.addEventListener('click', () => {
      this.dropdownContent.classList.toggle('show');
    });
    this.dropdowns.addEventListener('mouseleave', () => {
      this.dropdownContent.classList.remove('show');
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/dropdown.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvbW9kdWxlcy9kcm9wZG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZURvbSgpO1xuICAgIHRoaXMuY2FjaGVEb20oKTtcbiAgICB0aGlzLmluaXRpYWxpemVEcm9wZG93bigpO1xuICB9XG5cbiAgY2FjaGVEb20oKSB7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMuZHJvcGRvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXNjcmlwdCcpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZScpO1xuICAgIHRoaXMuZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgfVxuXG4gIGluaXRpYWxpemVEb20oKSB7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIHRoaXMuYm9keS5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgPGJ1dHRvbj5Gb29kIEhvdmVyPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8YSBocmVmPVwiXCI+QXBwbGU8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5CYW5hbmE8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5PcmFuZ2U8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tc2NyaXB0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPSdkcm9wZG93bi10b2dnbGUnPkZvb2QgQ2xpY2s8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIj5BcHBsZTwvYT5cbiAgICAgICAgPGEgaHJlZj1cIlwiPkJhbmFuYTwvYT5cbiAgICAgICAgPGEgaHJlZj1cIlwiPk9yYW5nZTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cblxuICBpbml0aWFsaXplRHJvcGRvd24oKSB7XG4gICAgdGhpcy50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgdGhpcy5kcm9wZG93bnMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==