/**
 * Created by Peter Rosellen <pr@add2.de> on 20.10.2017.
 */
import getCatElement from './modules/getCatElement';

const keysPressed = [];
const catCode = 'add2de'; // Der geheime Code, um das Katzengif zu erstellen
const catDivID = 'add2-eastercat'; // Die ID für das Katzen-DIV


/**
 * Entfernt das DOM-Element mit der Katze wieder aus dem DOM
 * @param catDomElement Das DOM-Element der Katze
 */
function removeCat(catDomElement) {
  document.getElementsByTagName('body')[0].removeChild(catDomElement);
}


/**
 * Berechnet eine zufällige Position auf der x-Achse
 * @param catDomElement Das DOM-Element mit der Katze, um die Breite des Bildes zu errechnen
 * @returns {number} Eine zufällige Nummer zwischen 0 und Browserbreite - der Breite des Katzenbildes
 */
function getCatPosition(catDomElement) {
  const catWidth = catDomElement.offsetWidth;
  const browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const catPlayground = browserWidth - catWidth;

  return Math.floor(Math.random() * catPlayground) + 1;
}


/**
 * Fügt das Katzenbild hinzu, positioniert ers auf der x-Achse und löscht es nach 1 Sekunde wieder
 */
function addCat() {
  const catElement = getCatElement(catDivID);
  const catDomElement = document.getElementsByTagName('body')[0].appendChild(catElement);

  const catPosition = getCatPosition(catDomElement);
  catDomElement.style.left = `${catPosition}px`;
  catDomElement.style.bottom = '0px';

  window.setTimeout(removeCat, 1000, catDomElement);
}


/**
 * Wartet auf die Eingabe des geheimen Codes
 */
window.addEventListener('keyup', (e) => {
  keysPressed.push(e.key);
  keysPressed.splice(-catCode.length - 1, keysPressed.length - catCode.length);
  if (keysPressed.join('').includes(catCode)) {
    addCat();
  }
  console.log(keysPressed);
});
