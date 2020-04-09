window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

import '../styles/base.css';
import '../styles/style.css';

import { langSelector } from './elements'
import { selectColorsByLanguage } from './colors'
import { displayColors, handlerLanguageSelector } from './handlers'
import { recognitionEN, speechRecognitionUnavailable } from './speech'

function init(){
  if (speechRecognitionUnavailable()){
    console.log('Sorry, your browser does not support speech recognition :(');
    return;
  } 

  const colors = selectColorsByLanguage(langSelector.value);
  displayColors(colors);
  recognitionEN.start();
  langSelector.addEventListener('change', handlerLanguageSelector);
}

init();
