export function caesarCipher(message, key) {
  let result = '';
  let shift = 0;

  // Determină decalajul în funcție de cheia furnizată
  if (typeof key === 'string' && key.length > 0) {
    for (let i = 0; i < key.length; i++) {
      let charCode = key.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Litere mari
        shift += charCode - 65;
      } else if (charCode >= 97 && charCode <= 122) { // Litere mici
        shift += charCode - 97;
      }
    }
    shift %= 26;
  }

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[a-zA-Z]/)) {
      const code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }

  return result;
}


export function handleClick(pass, message, plainText, encryptedText, caesarCipher) {
    let messageValue = message.value;
    let key = pass.value;
  
    let encryptedMessage = caesarCipher(messageValue, key);
    plainText.textContent = messageValue;
    encryptedText.textContent = encryptedMessage;
    console.log(encryptedMessage);
}
///////functia pentru decriptare////////////////////////////////////////
export function caesarDecipher(encryptedMessage, key) {
  let result = '';
  let shift = 0;

  if (typeof key === 'string' && key.length > 0) {
    for (let i = 0; i < key.length; i++) {
      let charCode = key.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Litere mari
        shift += charCode - 65;
      } else if (charCode >= 97 && charCode <= 122) { // Litere mici
        shift += charCode - 97;
      }
    }
    shift %= 26;
  }

  shift = 26 - shift;

  for (let i = 0; i < encryptedMessage.length; i++) {
    let char = encryptedMessage[i];
    if (char.match(/[a-zA-Z]/)) {
      const code = encryptedMessage.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }

  return result;
}



export const handleClick1 = (pass, message, plainText, encryptedText, caesarDecipher) => {
    let messageValue = message.value;
    let key = pass.value;
    let encryptedMessage = caesarCipher(messageValue, key);
    let decryptedMessage = caesarDecipher(encryptedMessage, key);
  
    plainText.textContent = messageValue;
    encryptedText.textContent = decryptedMessage;
};