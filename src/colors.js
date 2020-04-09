let colorList = []

const colorsByLanguage = [      
  { color: '#000000', en: 'black',             es: 'negro'},
  { color: '#C0C0C0', en: 'silver',            es: 'plateado'},
  { color: '#808080', en: 'grey',              es: 'gris' },
  { color: '#FFFFFF', en: 'white',             es: 'blanco' },
  { color: '#800000', en: 'maroon',            es: 'granate' },
  { color: '#FF0000', en: 'red',               es: 'rojo' },
  { color: '#800080', en: 'purple',            es: 'púrpura' },
  { color: '#FF00FF', en: 'fuchsia',           es: 'fucsia' },
  { color: '#008000', en: 'green',             es: 'verde' },
  { color: '#00FF00', en: 'lime',              es: 'lima' },
  { color: '#808000', en: 'olive',             es: 'oliva' },
  { color: '#FFFF00', en: 'yellow',            es: 'amarillo' },
  { color: '#000080', en: 'navy',              es: 'naval' },
  { color: '#0000FF', en: 'blue',              es: 'azul' },
  { color: '#008080', en: 'teal',              es: 'teal' },
  { color: '#00FFFF', en: 'aqua',              es: 'aguamarina' },
  { color: '#00008B', en: 'darkblue',          es: 'azuloscuro' },
  { color: '#0000CD', en: 'mediumblue',        es: 'azulmedio' },
  { color: '#006400', en: 'darkgreen',         es: 'verdeoscuro' },
  { color: '#008B8B', en: 'darkcyan',          es: 'verdecian' },
  { color: '#00BFFF', en: 'deepskyblue',       es: 'azulcieloprofundo' },
  { color: '#00CED1', en: 'darkturquoise',     es: 'turquezaoscuro' },
  { color: '#00FA9A', en: 'mediumspringgreen', es: 'verdeprimaveramedio' },
  { color: '#00FF7F', en: 'springgreen',       es: 'verdeprimavera' },
  { color: '#00FFFF', en: 'cyan',              es: 'cian' },
  { color: '#191970', en: 'midnightblue',      es: 'azulmedianoche' },
  { color: '#1E90FF', en: 'dodgerblue',        es: 'dodgerazul' },
  { color: '#20B2AA', en: 'lightseagreen',     es: 'verdeclaro' },
  { color: '#228B22', en: 'forestgreen',       es: 'verdebosque' },
  { color: '#2E8B57', en: 'seagreen',          es: 'verdemar' },
  { color: '#2F4F4F', en: 'darkslategray',     es: 'grisnoche' },
  { color: '#32CD32', en: 'limegreen',         es: 'verdelima' },
  { color: '#3CB371', en: 'mediumseagreen',    es: 'verdemarmedio' },
  { color: '#40E0D0', en: 'turquoise',         es: 'turquesa' },
  { color: '#4169E1', en: 'royalblue',         es: 'azulreal' },
  { color: '#4682B4', en: 'steelblue',         es: 'azulacero' },
  { color: '#483D8B', en: 'darkslateblue',     es: 'azulnocheoscura' },
  { color: '#48D1CC', en: 'mediumturquoise',   es: 'turquesamedio' },
  { color: '#4B0082', en: 'indigo',            es: 'indigo' },
  { color: '#556B2F', en: 'darkolivegreen',    es: 'verdeolivaoscuro' },
  { color: '#5F9EA0', en: 'cadetblue',         es: 'azulcadete' },
  { color: '#6495ED', en: 'cornflowerblue',    es: 'azullavanda' },
  { color: '#663399', en: 'rebeccapurple',     es: 'rebecapúrpura' },
  { color: '#66CDAA', en: 'mediumaquamarine',  es: 'aguamarinamedio' },
  { color: '#696969', en: 'dimgray',           es: 'gristenue' },
  { color: '#696969', en: 'dimgrey',           es: 'gristenue' },
  { color: '#6A5ACD', en: 'slateblue',         es: 'azulpizarra' },
  { color: '#6B8E23', en: 'olivedrab',         es: 'verdeoliva' },
  { color: '#708090', en: 'slategray',         es: 'grispizarra' },
  { color: '#708090', en: 'slategrey',         es: 'grisizarra' },
  { color: '#778899', en: 'lightslategray',    es: 'grisizarraclaro' },
  { color: '#778899', en: 'lightslategrey',    es: 'grisizarraclaro' },
  { color: '#7B68EE', en: 'mediumslateblue',   es: 'azulpizarramedio' },
  { color: '#7CFC00', en: 'lawngreen',         es: 'verdecésped' },
  { color: '#7FFF00', en: 'chartreuse',        es: 'verdechillón' },
  { color: '#7FFFD4', en: 'aquamarine',        es: 'aguamarina' },
  { color: '#87CEEB', en: 'skyblue',           es: 'azulcielo' },
  { color: '#87CEFA', en: 'lightskyblue',      es: 'azulcieloclaro' },
  { color: '#8A2BE2', en: 'blueviolet',        es: 'azulvioleta' },
  { color: '#8B0000', en: 'darkred',           es: 'rojooscuro' },
  { color: '#8B008B', en: 'darkmagenta',       es: 'magentaoscuro' },
  { color: '#8B4513', en: 'saddlebrown',       es: 'marróncaballo' },
  { color: '#8FBC8F', en: 'darkseagreen',      es: 'verdemaroscuro' },
  { color: '#90EE90', en: 'lightgreen',        es: 'verdeclaro' },
  { color: '#9370DB', en: 'mediumpurple',      es: 'púrpura' },
  { color: '#9400D3', en: 'darkviolet',        es: 'violetaoscuro' },
  { color: '#98FB98', en: 'palegreen',         es: 'verdepálido' },
  { color: '#9932CC', en: 'darkorchid',        es: 'orquídeaoscura' },
  { color: '#9ACD32', en: 'yellowgreen',       es: 'amarilloverdoso' },
  { color: '#A0522D', en: 'sienna',            es: 'tierra' },
  { color: '#A52A2A', en: 'brown',             es: 'marrón' },
  { color: '#A9A9A9', en: 'darkgray',          es: 'grisoscuro' },
  { color: '#A9A9A9', en: 'darkgrey',          es: 'grisoscuro' },
  { color: '#ADD8E6', en: 'lightblue',         es: 'azulclaro' },
  { color: '#ADFF2F', en: 'greenyellow',       es: 'verdeamarillento' },
  { color: '#AFEEEE', en: 'paleturquoise',     es: 'turquesapálido' },
  { color: '#B0C4DE', en: 'lightsteelblue',    es: 'acero' },
  { color: '#B0E0E6', en: 'powderblue',        es: 'azul pálido' },
  { color: '#B22222', en: 'firebrick',         es: 'ladrillo' },
  { color: '#B8860B', en: 'darkgoldenrod',     es: 'doradoquemado' },
  { color: '#BA55D3', en: 'mediumorchid',      es: 'orquídeamedio' },
  { color: '#BC8F8F', en: 'rosybrown',         es: 'paloderosa' },
  { color: '#BDB76B', en: 'darkkhaki',         es: 'caquioscuro' },
  { color: '#C71585', en: 'mediumvioletred',   es: 'rojovioletamedio' },
  { color: '#CD5C5C', en: 'indianred',         es: 'rojoindio' },
  { color: '#CD853F', en: 'peru',              es: 'pero' },
  { color: '#D2691E', en: 'chocolate',         es: 'chocolate' },
  { color: '#D2B48C', en: 'tan',               es: 'canela' },
  { color: '#D3D3D3', en: 'lightgray',         es: 'grisclaro' },
  { color: '#D3D3D3', en: 'lightgrey',         es: 'grisclaro' },
  { color: '#D8BFD8', en: 'thistle',           es: 'cardo' },
  { color: '#DA70D6', en: 'orchid',            es: 'orquídea' },
  { color: '#DAA520', en: 'goldenrod',         es: 'oro' },
  { color: '#DB7093', en: 'palevioletred',     es: 'violetarojizo' },
  { color: '#DC143C', en: 'crimson',           es: 'carmesí' },
  { color: '#DCDCDC', en: 'gainsboro',         es: 'boro' },
  { color: '#DDA0DD', en: 'plum', es: 'ciruela' },
  // { color: '#DEB887', en: 'burlywood', es: '' },
  // { color: '#E0FFFF', en: 'lightcyan', es: '' },
  // { color: '#E6E6FA', en: 'lavender', es: '' },
  // { color: '#E9967A', en: 'darksalmon', es: '' },
  // { color: '#EE82EE', en: 'violet', es: '' },
  // { color: '#EEE8AA', en: 'palegoldenrod', es: '' },
  // { color: '#F08080', en: 'lightcoral', es: '' },
  // { color: '#F0E68C', en: 'khaki', es: '' },
  // { color: '#F0F8FF', en: 'aliceblue', es: '' },
  // { color: '#F0FFF0', en: 'honeydew', es: '' },
  // { color: '#F0FFFF', en: 'azure', es: '' },
  // { color: '#F4A460', en: 'sandybrown', es: '' },
  // { color: '#F5DEB3', en: 'wheat', es: '' },
  // { color: '#F5F5DC', en: 'beige', es: '' },
  // { color: '#F5F5F5', en: 'whitesmoke', es: '' },
  // { color: '#F5FFFA', en: 'mintcream', es: '' },
  // { color: '#F8F8FF', en: 'ghostwhite', es: '' },
  // { color: '#FA8072', en: 'salmon', es: '' },
  // { color: '#FAEBD7', en: 'antiquewhite', es: '' },
  // { color: '#FAF0E6', en: 'linen', es: '' },
  // { color: '#FAFAD2', en: 'lightgoldenrodyellow', es: '' },
  // { color: '#FDF5E6', en: 'oldlace', es: '' },
  // { color: '#FF00FF', en: 'magenta', es: '' },
  // { color: '#FF1493', en: 'deeppink', es: '' },
  // { color: '#FF4500', en: 'orangered', es: '' },
  // { color: '#FF6347', en: 'tomato', es: '' },
  // { color: '#FF69B4', en: 'hotpink', es: '' },
  // { color: '#FF7F50', en: 'coral', es: '' },
  // { color: '#FF8C00', en: 'darkorange', es: '' },
  // { color: '#FFA07A', en: 'lightsalmon', es: '' },
  // { color: '#FFA500', en: 'orange', es: '' },
  // { color: '#FFB6C1', en: 'lightpink', es: '' },
  // { color: '#FFC0CB', en: 'pink', es: '' },
  // { color: '#FFD700', en: 'gold', es: '' },
  // { color: '#FFDAB9', en: 'peachpuff', es: '' },
  // { color: '#FFDEAD', en: 'navajowhite', es: '' },
  // { color: '#FFE4B5', en: 'moccasin', es: '' },
  // { color: '#FFE4C4', en: 'bisque', es: '' },
  // { color: '#FFE4E1', en: 'mistyrose', es: '' },
  // { color: '#FFEBCD', en: 'blanchedalmond', es: '' },
  // { color: '#FFEFD5', en: 'papayawhip', es: '' },
  // { color: '#FFF0F5', en: 'lavenderblush', es: '' },
  // { color: '#FFF5EE', en: 'seashell', es: '' },
  // { color: '#FFF8DC', en: 'cornsilk', es: '' },
  // { color: '#FFFACD', en: 'lemonchiffon', es: '' },
  // { color: '#FFFAF0', en: 'floralwhite', es: '' },
  // { color: '#FFFAFA', en: 'snow', es: '' },
  // { color: '#FFFFE0', en: 'lightyellow', es: '' },
  // { color: '#FFFFF0', en: 'ivory', es: '' },
];

function findColorsByLanguage(language) {
  const currentLanguage = language.slice(0,2);
  const entries = colorsByLanguage.map(item => [item[currentLanguage], item.color]);
  return Object.fromEntries(entries);
}

export function selectColorsByLanguage(language){
  colorList = findColorsByLanguage(language);
  return colorList;
}

export function isDark(colorName) {
  const hex = colorList[colorName].substring(1, 7);
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 < 120;
}

// export let colorsByLength = Object.keys(colorList).sort(
//   (a, b) => a.length - b.length
// );

export function sortColorsByLength(colors){
  return  Object.keys(colors).sort((a, b) => a.length - b.length);
}

export function isValidColor(colorName) {
  return !!colorList[colorName];
}

