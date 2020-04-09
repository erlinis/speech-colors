import  { handleResult } from './handlers'

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function speechRecognitionUnavailable(){
  return !('SpeechRecognition' in window)
}

const recognitionEN = new SpeechRecognition();
recognitionEN.continuous = true;
recognitionEN.interimResults = true;
recognitionEN.onresult = handleResult;
recognitionEN.lang = 'en-US';

const recognitionES = new SpeechRecognition();
recognitionES.continuous = true;
recognitionES.interimResults = true;
recognitionES.onresult = handleResult;
recognitionES.lang = 'es-CO';

export { recognitionEN, recognitionES };