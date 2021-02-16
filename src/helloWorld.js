// helloWorld.js
import { LightningElement, api } from "lwc";

export default class HelloWorld extends LightningElement {
    @api firstName = "World";
}

console.log('hello');
var jsElm = document.createElement("script");
// set the type attribute
jsElm.type = "application/javascript";
// make the script element load file
jsElm.src = 'https://www.onelink-edge.com/moxie.min.js';
// Finally insert the element to the body element in order to load the script
document.body.appendChild(jsElm);
var jsElm2 = document.createElement("script");
// set the type attribute
jsElm2.type = "application/javascript";
// make the script element load file
jsElm2.src = 'https://www.onelink-edge.com/xapis/Pretranslate/524F-32AA-A083-0EC1.js';
// Finally insert the element to the body element in order to load the script
document.body.appendChild(jsElm2);