/**
 * Created by Peter Rosellen <pr@add2.de> on 20.10.2017.
 */
import getKatElement from './modules/getKatElement';

const keysPressed = [];
const katCode = 'add2de'; // Der geheime Code, um das Katzengif zu erstellen
const katDivID = 'add2kat'; // Die ID für das Katzen-DIV


/**
 * Entfernt das DOM-Element mit der Katze wieder aus dem DOM
 * @param katDomElement Das DOM-Element der Katze
 */
function removeKat(katDomElement) {
  document.getElementsByTagName('body')[0].removeChild(katDomElement);
}


/**
 * Berechnet eine zufällige Position auf der x-Achse
 * @param katDomElement Das DOM-Element mit der Katze, um die Breite des Bildes zu errechnen
 * @returns {number} Eine zufällige Nummer zwischen 0 und Browserbreite - der Breite des Katzenbildes
 */
function getKatPosition(katDomElement) {
  const katWidth = katDomElement.offsetWidth;
  const browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const katPlayground = browserWidth - katWidth;

  return Math.floor(Math.random() * katPlayground) + 1;
}


/**
 * Fügt das Katzenbild hinzu, positioniert ers auf der x-Achse und löscht es nach 1 Sekunde wieder
 */
function addKat() {
  const katElement = getKatElement(katDivID);
  const katDomElement = document.getElementsByTagName('body')[0].appendChild(katElement);

  const katPosition = getKatPosition(katDomElement);
  katDomElement.style.left = `${katPosition}px`;
  katDomElement.style.bottom = '0px';

  window.setTimeout(removeKat, 1000, katDomElement);
}


/**
 * Wartet auf die Eingabe des geheimen Codes
 */
window.addEventListener('keyup', (e) => {
  keysPressed.push(e.key);
  keysPressed.splice(-katCode.length - 1, keysPressed.length - katCode.length);
  if (keysPressed.join('').includes(katCode)) {
    addKat();
  }
  console.log(keysPressed);
});
