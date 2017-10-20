/**
 * Created by Peter Rosellen <pr@add2.de> on 20.10.2017.
 */
import getKatDom from './modules/getKatDom';

const keysPressed = [];
const katCode = 'add2de';
let domElement;

document.getElementsByTagName('body')[0].appendChild(getKatDom());

function addKat() {

}

function removeKat() {

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
