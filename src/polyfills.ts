
 
 
 /** IE10 and IE11 requires the following for NgClass support on SVG elements */
 import "classlist.js"; // Run `npm install --save classlist.js`.
 import "core-js/es/array";
 import "core-js/es/object";
 /** IE10 and IE11 requires the following for the Reflect API. */
 import "core-js/es/reflect";
 import "core-js/es/string";
 import "core-js/stable";
 import "cross-fetch/polyfill";
 // import "first-input-delay";
 import "globalthis";
 import "isomorphic-fetch";
 /**
  * Required to support Web Animations `@angular/platform-browser/animations`.
  * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
  **/
 import "web-animations-js"; // Run `npm install --save web-animations-js`.
 import "zone.js"; // Included with Angular CLI.
 /***************************************************************************************************
  * Zone JS is required by Angular itself.
  */
 import "./polyfills/proxy.polyfill.js";
 (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ["scroll", "mousemove"]; // disable patch specified eventNames
 
 /*
  * in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
  * with the following flag, it will bypass `zone.js` patch for IE/Edge
  */
 (window as any).__Zone_enable_cross_context_check = true;
 
 /*
  * To have compatibility across a wide range of environments for AngularFire and Firebase
  * IE 11, Chrome < 71, Safari < 12.1, iOS < 12.2, Node < 12
  */
 (window as any).globalThis = window;
 
 /***************************************************************************************************
  * APPLICATION IMPORTS
  */
 
 /**
  * Date, currency, decimal and percent pipes.
  * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
  */
 // import "intl"; // Run `npm install --save intl`.
 /**
  * Need to import at least one locale-data with intl.
  */
 // import "intl/locale-data/jsonp/en";
 
 
 // if (!Element.prototype.closest) {
 //   Element.prototype.closest = function (s) {
 //     let el = this;
 
 //     do {
 //       if (Element.prototype.matches.call(el, s)) { return el; }
 //       el = el.parentElement || el.parentNode;
 //     } while (el !== null && el.nodeType === 1);
 //     return null;
 //   };
 
 // }
 
 /**
  * IE11 "crypto" is undefined error fix
  * Reference: https://github.com/auth0/auth0-spa-js/issues/113#issuecomment-520033811
  */
 if (!window.crypto && (<any>window).msCrypto) {
   (<any>window).crypto = (<any>window).msCrypto;
 }
 