/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js"
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _morse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./morse.js */ \"./public/js/morse.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var selectTipoConversion = document.getElementById(\"tipoConversion\");\n  var labelEntrada = document.getElementById(\"labelEntrada\");\n  var inputTexto = document.getElementById(\"entradaTexto\");\n  var btnCalcular = document.getElementById(\"btnCalcular\");\n  var btnLimpiar = document.getElementById(\"btnLimpiar\");\n  var contenedorResultado = document.getElementById(\"resultado\");\n  if (selectTipoConversion) {\n    selectTipoConversion.addEventListener(\"change\", function () {\n      limpiarContenido();\n      if (selectTipoConversion.value === \"textoToMorse\") {\n        labelEntrada.textContent = \"Texto a convertir:\";\n        inputTexto.placeholder = \"Escribe tu texto aquí...\";\n      } else {\n        labelEntrada.textContent = \"Código Morse a convertir:\";\n        inputTexto.placeholder = \"Ej: .-   -...   -.-.\";\n      }\n    });\n  }\n  var limpiarContenido = function limpiarContenido() {\n    inputTexto.value = \"\";\n    contenedorResultado.innerHTML = \"\";\n    inputTexto.focus();\n  };\n  var convertir = function convertir() {\n    var textoIngresado = inputTexto.value.trim();\n    var tipo = selectTipoConversion ? selectTipoConversion.value : \"textoToMorse\";\n    if (!textoIngresado) {\n      contenedorResultado.innerHTML = \"\\n                <div class=\\\"row justify-content-center\\\">\\n                    <div class=\\\"col-12\\\">\\n                        <div class=\\\"alert alert-danger text-center fw-bold py-3\\\" role=\\\"alert\\\">\\n                            Por favor, ingresa un valor para realizar la conversi\\xF3n.\\n                        </div>\\n                    </div>\\n                </div>\\n            \";\n      return;\n    }\n    var resultadoFinal = tipo === \"textoToMorse\" ? (0,_morse_js__WEBPACK_IMPORTED_MODULE_0__.textoAMorse)(textoIngresado) : (0,_morse_js__WEBPACK_IMPORTED_MODULE_0__.morseATexto)(textoIngresado);\n    contenedorResultado.innerHTML = \"\\n            <div class=\\\"row justify-content-center\\\">\\n                <div class=\\\"col-12 text-center\\\">\\n                    <div class=\\\"card border-success shadow-sm\\\">\\n                        <div class=\\\"card-header bg-success text-white fw-bold\\\">\\n                            RESULTADO DE LA CONVERSI\\xD3N\\n                        </div>\\n                        <div class=\\\"card-body\\\">\\n                            <p class=\\\"mb-1 text-muted\\\">Traducci\\xF3n obtenida:</p>\\n                            <h3 class=\\\"bg-light p-3 rounded text-success fw-bold text-break\\\" style=\\\"font-family: monospace;\\\">\\n                                \".concat(resultadoFinal, \"\\n                            </h3>\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n        \");\n  };\n  if (btnCalcular) {\n    btnCalcular.addEventListener(\"click\", convertir);\n  }\n  if (btnLimpiar) {\n    btnLimpiar.addEventListener(\"click\", limpiarContenido);\n  }\n});\n\n//# sourceURL=webpack://codigo_morse/./public/js/index.js?\n}");

/***/ },

/***/ "./public/js/morse.js"
/*!****************************!*\
  !*** ./public/js/morse.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   morseATexto: () => (/* binding */ morseATexto),\n/* harmony export */   morseMap: () => (/* binding */ morseMap),\n/* harmony export */   textoAMorse: () => (/* binding */ textoAMorse)\n/* harmony export */ });\nvar morseMap = {\n  'A': '.-',\n  'B': '-...',\n  'C': '-.-.',\n  'D': '-..',\n  'E': '.',\n  'F': '..-.',\n  'G': '--.',\n  'H': '....',\n  'I': '..',\n  'J': '.---',\n  'K': '-.-',\n  'L': '.-..',\n  'M': '--',\n  'N': '-.',\n  'Ñ': '--.--',\n  'O': '---',\n  'P': '.--.',\n  'Q': '--.-',\n  'R': '.-.',\n  'S': '...',\n  'T': '-',\n  'U': '..-',\n  'V': '...-',\n  'W': '.--',\n  'X': '-..-',\n  'Y': '-.--',\n  'Z': '--..',\n  '0': '-----',\n  '1': '.----',\n  '2': '..---',\n  '3': '...--',\n  '4': '....-',\n  '5': '.....',\n  '6': '-....',\n  '7': '--...',\n  '8': '---..',\n  '9': '----.',\n  '.': '.-.-.-',\n  ',': '--..--',\n  '?': '..--..',\n  '/': '-..-.'\n};\nvar reverseMorseMap = {};\nfor (var key in morseMap) {\n  reverseMorseMap[morseMap[key]] = key;\n}\nvar textoAMorse = function textoAMorse(texto) {\n  var limpio = texto.toUpperCase().replace(/[ÁÀÄÂ]/g, \"A\").replace(/[ÉÈËÊ]/g, \"E\").replace(/[ÍÌÏÎ]/g, \"I\").replace(/[ÓÒÖÔ]/g, \"O\").replace(/[ÚÙÜÛ]/g, \"U\");\n  var palabras = limpio.split(\"\\n\");\n  return palabras.map(function (palabra) {\n    return palabra.trim().split('').map(function (_char) {\n      if (_char === ' ') return '/';\n      return morseMap[_char] || _char;\n    }).join('   ');\n  }).join('   /   ');\n};\nvar morseATexto = function morseATexto(morse) {\n  var palabras = morse.trim().split(/\\s*\\/\\s*|\\s{3,}/);\n  return palabras.map(function (palabra) {\n    var letras = palabra.trim().split(/\\s+/);\n    return letras.map(function (letra) {\n      return reverseMorseMap[letra] || '';\n    }).join('');\n  }).join(' ');\n};\n\n//# sourceURL=webpack://codigo_morse/./public/js/morse.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./public/js/index.js");
/******/ 	
/******/ })()
;