/**
 * Created by Peter Rosellen <pr@add2.de> on 20.10.2017.
 */
import getKatDom from './modules/getKatDom';

const keysPressed = [];
const katCode = 'add2de';
const katDivID = 'add2kat';
let domElement;

function removeKat() {
  document.getElementsByTagName('body')[0].removeChild(domElement);
}

function addKat() {
  const katWidth = 170;
  const browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const katPlayground = browserWidth - katWidth;
  const katPosition = Math.floor(Math.random() * katPlayground) + 1;

  const katDom = getKatDom(katDivID);
  katDom.style.cssText = `left: ${katPosition}px; bottom: 0px; ${katDom.style.cssText}`;
  domElement = document.getElementsByTagName('body')[0].appendChild(katDom);

  window.setTimeout(removeKat, 1000, true);
}

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  keysPressed.push(e.key);
  keysPressed.splice(-katCode.length - 1, keysPressed.length - katCode.length);
  if (keysPressed.join('').includes(katCode)) {
    console.log('DING DING!');
    addKat();
  }
  console.log(keysPressed);
});
