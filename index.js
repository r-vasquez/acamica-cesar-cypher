const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const shiftAlphabet = (shift, alphabet) => {
  let shiftedAlphabet = [];
  const alphabetLength = alphabet.length;

  let j = shift;
  for (let index = 0; index < alphabetLength; index++) {
    // TODO: No funciona para positivo, solo para negativo.
    if (j >= alphabetLength) {
      j = j - alphabetLength;
    } else if (j < 0) {
      j = j * -1;
    }
    const shiftdLetter = alphabet[j];
    shiftedAlphabet.push(shiftdLetter);
    j++;
  }

  return shiftedAlphabet;
};

const decrypt = (text, shift, alphabet) => {
  const shiftedAlphabet = shiftAlphabet(shift, alphabet);

  const textArray = text.toLowerCase().split('');

  const decryptedArray = [];
  for (let i = 0; i < textArray.length; i++) {
    let indexShifted = shiftedAlphabet.indexOf(textArray[i]);
    let decryptLetter = alphabet[indexShifted];
    if (!decryptLetter) decryptLetter = textArray[i];
    decryptedArray.push(decryptLetter);
  }

  return decryptedArray.join('');
};

let shift = -3;
let toDecrypt =
  '¡Ihñlflgdghv! Ghvfxeulvwh hñ fliudgr fruuhfwr sdud ñhhu hvwh ohpvdmh. Hvwh wlsr gh shpvdolhpwr ñdwhudñ wh vhud oxb xwlñ sdud pxhvwur suóalor hpfxhpwur. Vhud xp hpfxhpwur wrwdñohpwh dwlslfr hp hñ txh uhvrñyhuhorv xp mxhjr hpwuh wrgrv b wrgdv. Xpd hvshflh gh “ghvdilr gh hvfdsh yluwxdñ”. Shur, dsduwh gh dsñlfdu shpvdolhpwr ñdwhudñ, ghehudv dsñlfdu xp srfr gh mdydvfulsw, kwoñ b fvv sdud ññhjdu dñ ilpdñ. Wh ghmdorv xpd slvwd txh wh vhud oxb xwlñ hp hñ mxhjr: ¿txh iruod wlhph ñd udlc ghñ duerñ? ¿Hvwáv ñlvwr/d sdud xpd dyhpwxud?';
const decryptedText = decrypt(toDecrypt, shift, alphabet);

console.log(decryptedText);
