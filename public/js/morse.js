export const morseMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'Ñ': '--.--',
    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',
    'T': '-',     'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',  
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.'
};

const reverseMorseMap = {};
for (let key in morseMap) {
    reverseMorseMap[morseMap[key]] = key;
}

export const textoAMorse = (texto) => {
    let limpio = texto.toUpperCase()
        .replace(/[ÁÀÄÂ]/g, "A")
        .replace(/[ÉÈËÊ]/g, "E")
        .replace(/[ÍÌÏÎ]/g, "I")
        .replace(/[ÓÒÖÔ]/g, "O")
        .replace(/[ÚÙÜÛ]/g, "U");

    let palabras = limpio.split("\n");
    return palabras.map(palabra => {
        return palabra.trim().split('').map(char => {
            if (char === ' ') return '/';
            return morseMap[char] || char;
        }).join('   ');
    }).join('   /   ');
};

export const morseATexto = (morse) => {
    let palabras = morse.trim().split(/\s*\/\s*|\s{3,}/);
    return palabras.map(palabra => {
        let letras = palabra.trim().split(/\s+/);
        return letras.map(letra => reverseMorseMap[letra] || '').join('');
    }).join(' ');
};