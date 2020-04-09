import { selectColorsByLanguage, sortColorsByLength, isDark, isValidColor} from './colors'
import { colorsContainer } from './elements'
import { recognitionEN, recognitionES } from './speech'


function generateColorsSpanElements(colors) {
  const colorsByLength = sortColorsByLength(colors);

  return colorsByLength
    .map(
      colorName =>
        `<span 
            class="color ${colorName} ${isDark(colorName) ? 'dark' : ''}" 
            style="background: ${colors[colorName]};"
            data-rgb="${colors[colorName]}">
              ${colorName}
        </span>`
    )
    .join('');
}

function switchRecognition(lang){
  if (lang === 'en-US'){
    recognitionEN.start();
    recognitionES.stop();
  } else {
    recognitionES.start();
    recognitionEN.stop();
  }
}

export function displayColors(colors){
  colorsContainer.innerHTML = generateColorsSpanElements(colors);
}

export function handlerLanguageSelector(event){
  const lang = event.target.value;

  const colors = selectColorsByLanguage(lang);
  switchRecognition(lang);
  displayColors(colors);
}


function logWords(results){
  const words = results[results.length - 1][0].transcript;
  console.log('You said:', words);
}

export function handleResult({results}){
 logWords(results);
 const words = results[results.length - 1][0].transcript;

 let colorName = words.toLowerCase();
 colorName = colorName.replace(/\s/g, '');

 if(!isValidColor(colorName)) return;

 const colorSpan = document.querySelector(`.${colorName}`);
 const rgbColor = colorSpan.dataset.rgb;

 colorSpan.classList.add('got');                  //animate color
 document.body.style.backgroundColor = rgbColor;  //change background color
}
