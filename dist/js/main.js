/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/aside/aside.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/aside/aside.js ***!
  \*******************************************/
/***/ (function() {

(function () {
  var asideButtons = document.querySelectorAll(".aside .button");
  function setActiveClass() {
    if (this.classList.contains("active")) {
      return;
    } else {
      asideButtons.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    asideButtons.forEach(function (el) {
      el.addEventListener("click", setActiveClass);
    });
  });
})();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {

(function () {
  function toggleTheme() {
    var html = document.getElementsByTagName("html");
    if (html[0].getAttribute("data-bs-theme") == "") {
      html[0].setAttribute("data-bs-theme", "dark");
    } else {
      html[0].setAttribute("data-bs-theme", "");
    }
  }
  var toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", toggleTheme);

  // toggleTheme();
})();

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/***/ (function() {

(function () {
  var url = "https://picsum.photos/v2/list?page=1&limit=9";
  var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet asperiores aut consectetur consequatur cupiditate debitis doloremque dolores, ea eaque earum eius eligendi eos error est ex fuga fugiat illo iste laborum libero, mollitia nemo non nostrum odio optio placeat qui quibusdam quidem quis quisquam repellat saepe sequi sunt, tempora tempore temporibus. Aliquam asperiores ex, fugiat illo in iste maiores nemo odit ratione rem. Amet commodi deleniti dolorum eaque earum eos ex excepturi incidunt inventore necessitatibus nobis omnis quo ratione, saepe vero voluptate voluptates! Animi aspernatur blanditiis enim, expedita porro soluta. Amet at aut consectetur, consequatur distinctio doloremque esse est eveniet facilis ipsam labore maiores numquam officia pariatur quas qui, rerum sapiente similique! Aliquam autem dignissimos, distinctio enim eos labore minima nihil provident quaerat quis vel veniam voluptas, voluptate.";
  var cardText = "";
  var cards = document.getElementById("cards");
  function toggleShowText() {
    var text = this.previousElementSibling;
    if (text.classList.contains("custom-text")) {
      text.classList.remove("custom-text");
      this.innerHTML = "Hide";
    } else {
      text.classList.add("custom-text");
      this.innerHTML = "Show more...";
    }
  }
  function create(tag, cls, content) {
    var element = document.createElement(tag);
    cls.split(" ").forEach(function (el) {
      return element.classList.add(el);
    });
    if (content) element.innerHTML = content;
    return element;
  }
  function createCard(text, author, url) {
    var cardWrapper = create("div", "col-12 col-md-6");
    var card = create("div", "card");
    var canvas = create("canvas", "card-img-top");
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = function () {
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.getContext("2d").drawImage(this, 0, 0);
    };
    var cardBody = create("div", "card-body");
    var cardTitle = create("h5", "card-title ms-3", author);
    var cardText = create("p", "card-text custom-text ms-3", text);
    var cardFooter = create("div", "card-footer p-4");
    var buttonSave = create("button", "btn btn-success mx-1", "Save to collection");
    var buttonShare = create("button", "btn btn-outline-secondary", "Share");
    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardFooter.append(buttonSave);
    cardFooter.append(buttonShare);
    card.append(canvas);
    card.append(cardBody);
    card.append(cardFooter);
    cardWrapper.append(card);
    return cardWrapper;
  }
  document.addEventListener("DOMContentLoaded", function () {
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      data.map(function (el) {
        cardText = lorem.slice(0, lorem.length * Math.random() / 5);
        var card = createCard(cardText, el.author, el.url);
        console.log(card);
        cards.append(card);
        // let card = `<div class="col-12 col-md-6">
        //                 <div class="card"><img class="card-img-top" src="${el.url}" >
        //                   <div class="card-body">
        //                     <h5 class="card-title ms-3">${el.author}</h5>
        //                     <p class="card-text custom-text ms-3">${cardText}</p>
        //                   </div>
        //                   <div class="card-footer p-4">
        //                     <button class="btn btn-success">Save to collection</button>
        //                     <button class="btn btn-outline-secondary">Share</button>
        //                   </div>
        //                 </div>
        //               </div>`;
        // cards.innerHTML += card;
      });
    }).then(function () {
      var cardTexts = document.querySelectorAll(".card-text");
      cardTexts.forEach(function (el) {
        if (el.innerText.length > 60) {
          // el.setAttribute("class", "text-truncate");
          var button = document.createElement("button");
          button.className = "btn";
          button.innerHTML = "Show more...";
          button.addEventListener("click", toggleShowText);
          el.after(button);
        } else {
          el.style.marginBottom = "54px";
        }
      });
    });
  });
})();

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_aside_aside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/aside/aside */ "./src/blocks/modules/aside/aside.js");
/* harmony import */ var _modules_aside_aside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_aside_aside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.js.map