/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/auth/validate.js":
/*!***************************************!*\
  !*** ./resources/js/auth/validate.js ***!
  \***************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var errorAlert = document.querySelector('.alert-danger');\n  if (errorAlert) {\n    setTimeout(function () {\n      errorAlert.style.opacity = '0';\n      errorAlert.style.transition = 'opacity 0.5s';\n      setTimeout(function () {\n        errorAlert.style.display = 'none';\n      }, 500);\n    }, 5000); // 5000 milliseconds = 5 seconds\n  }\n\n  var inputFields = document.querySelectorAll('.form-control.is-invalid');\n  inputFields.forEach(function (inputField) {\n    inputField.addEventListener('input', function () {\n      inputField.classList.remove('is-invalid');\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvckFsZXJ0IiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZGlzcGxheSIsImlucHV0RmllbGRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dEZpZWxkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIl0sInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hdXRoL3ZhbGlkYXRlLmpzPzEzZmMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGVycm9yQWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtZGFuZ2VyJyk7XHJcblxyXG4gICAgaWYgKGVycm9yQWxlcnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXJyb3JBbGVydC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICBlcnJvckFsZXJ0LnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjVzJztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckFsZXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSwgNTAwMCk7IC8vIDUwMDAgbWlsbGlzZWNvbmRzID0gNSBzZWNvbmRzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sLmlzLWludmFsaWQnKTtcclxuXHJcbiAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dEZpZWxkKSB7XHJcbiAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUUxRCxJQUFJRCxVQUFVLEVBQUU7SUFDWkUsVUFBVSxDQUFDLFlBQVk7TUFDbkJGLFVBQVUsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsR0FBRztNQUM5QkosVUFBVSxDQUFDRyxLQUFLLENBQUNFLFVBQVUsR0FBRyxjQUFjO01BQzVDSCxVQUFVLENBQUMsWUFBWTtRQUNuQkYsVUFBVSxDQUFDRyxLQUFLLENBQUNHLE9BQU8sR0FBRyxNQUFNO01BQ3JDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNkOztFQUVBLElBQU1DLFdBQVcsR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztFQUV6RUQsV0FBVyxDQUFDRSxPQUFPLENBQUMsVUFBVUMsVUFBVSxFQUFFO0lBQ3RDQSxVQUFVLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQzdDVyxVQUFVLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM3QyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXV0aC92YWxpZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/auth/validate.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/auth/validate.js"]();
/******/ 	
/******/ })()
;