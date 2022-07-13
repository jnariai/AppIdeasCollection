// Vigenere Cipher algo
const inputText = document.getElementById('input-text');
const inputKey = document.getElementById('input-key');
const btnEncrypt = document.getElementById('btn-encrypt');
const btnDecrypt = document.getElementById('btn-decrypt');
const btnCompare = document.getElementById('btn-compare');
const resultText = document.getElementById('result-text');
const compareText = document.getElementById('compare-message');

// Array of all letters of the alphabetic
const alphabetic = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const validInput = /^[a-zA-Z\s]*$/;

// Variables used in encryption and decryption function
let inputKeyUpper = '';
let inputKeyArray = [];

btnEncrypt.addEventListener('click', validation);
btnDecrypt.addEventListener('click', vigenereCipherDecrypt);
btnCompare.addEventListener('click', compareOriginalWithDecrypted);

function validation() {
  if (inputText.value == '' || inputKey.value == '') {
    window.alert('Your message and key must not be empty');
    return;
  } else if (
    !inputText.value.match(validInput) ||
    !inputKey.value.match(validInput)
  ) {
    window.alert('Only characters or whitespace allowed');
    return;
  }
  vigenereCipherEncrypt();
}

function vigenereCipherEncrypt() {
  // Reset compare text
  compareText.innerHTML = '';
  // Prevents user from change original message
  inputText.disabled = true;
  inputKey.disabled = true;
  let textEncrypted = [];
  const inputTextArray = inputText.value.replace(/ /g, '').split('');
  inputKeyArray = inputKey.value.replace(/ /g, '').split('');
  const lengthDiff = inputTextArray.length - inputKeyArray.length;
  //Verify if key is smaller than text and if true, then fill key value with itself until it matches text lenght
  if (lengthDiff > 0) {
    for (let i = 0; i < lengthDiff; i++) {
      inputKeyArray.push(inputKeyArray[i]);
    }
  }

  let spaceCount = 0;
  for (let i = 0; i < inputText.value.split('').length; i++) {
    if (inputText.value.split('')[i] == ' ') {
      spaceCount++;
      textEncrypted.push(' ');
    } else {
      const keyPosition = alphabetic.indexOf(
        inputKeyArray[i - spaceCount].toUpperCase()
      );
      const textPosition = alphabetic.indexOf(
        inputTextArray[i - spaceCount].toUpperCase()
      );
      let textEncryptedPosition = keyPosition + textPosition;

      if (textEncryptedPosition >= 26) {
        textEncryptedPosition -= 26;
      }
      // Verify if need to push lower or upper case
      if (alphabetic.includes(inputTextArray[i - spaceCount]) == false) {
        textEncrypted.push(alphabetic[textEncryptedPosition].toLowerCase());
      } else {
        textEncrypted.push(alphabetic[textEncryptedPosition]);
      }
    }
  }
  resultText.innerHTML = textEncrypted.join('');
  btnDecrypt.disabled = false;
}

function vigenereCipherDecrypt() {
  let textDecrypted = [];
  const decryptResult = resultText.innerHTML.replace(/ /g, '').split('');
  let spaceCount = 0;
  for (let i = 0; i < resultText.innerHTML.split('').length; i++) {
    if (inputText.value.split('')[i] == ' ') {
      spaceCount++;
      textDecrypted.push(' ');
    } else {
      const resultPosition = alphabetic.indexOf(
        decryptResult[i - spaceCount].toUpperCase()
      );
      const keyPosition = alphabetic.indexOf(
        inputKeyArray[i - spaceCount].toUpperCase()
      );
      let textDecryptedPosition = resultPosition - keyPosition;

      if (textDecryptedPosition < 0) {
        textDecryptedPosition += 26;
      }
      // Verify if need to push lower or upper case
      if (alphabetic.includes(decryptResult[i - spaceCount]) == false) {
        textDecrypted.push(alphabetic[textDecryptedPosition].toLowerCase(''));
      } else {
        textDecrypted.push(alphabetic[textDecryptedPosition]);
      }
    }
  }

  resultText.innerHTML = textDecrypted.join('');
  btnDecrypt.disabled = true;
  btnCompare.disabled = false;
}

function compareOriginalWithDecrypted() {
  if (inputText.value != resultText.innerHTML) {
    compareText.innerHTML = 'Error detected, original message corrupted';
  } else {
    compareText.innerHTML = 'Original message recovered successfully';
  }
  btnCompare.disabled = true;
  inputText.disabled = false;
  inputKey.disabled = false;
}
