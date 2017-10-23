/**
 * Created by Peter Rosellen <pr@add2.de> on 20.10.2017.
 */
import getKatElement from './modules/getKatElement';

const keysPressed = [];
const katCode = 'add2de';
const katDivID = 'add2kat';

function removeKat(katDomElement) {
  document.getElementsByTagName('body')[0].removeChild(katDomElement);
}

function getKatPosition(katDomElement) {
  const katWidth = katDomElement.offsetWidth;
  const browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const katPlayground = browserWidth - katWidth;

  return Math.floor(Math.random() * katPlayground) + 1;
}

function addKat() {
  const katElement = getKatElement(katDivID);
  const katDomElement = document.getElementsByTagName('body')[0].appendChild(katElement);

  const katPosition = getKatPosition(katDomElement);
  katDomElement.style.left = `${katPosition}px`;
  katDomElement.style.bottom = '0px';

  window.setTimeout(removeKat, 1000, katDomElement);
}

window.addEventListener('keyup', (e) => {
  keysPressed.push(e.key);
  keysPressed.splice(-katCode.length - 1, keysPressed.length - katCode.length);
  if (keysPressed.join('').includes(katCode)) {
    addKat();
  }
  console.log(keysPressed);
});
