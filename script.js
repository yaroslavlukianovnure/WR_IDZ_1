const textInput = document.getElementById('textInput');
const shiftInput = document.getElementById('shiftInput');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const outputResult = document.getElementById('outputResult');

function caesarCipher(text, shift, isDecrypting = false) {
    let result = '';
    
    if (!isDecrypting) shift = (26 - shift) % 26;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                let shiftedCode = ((code - 65 + shift) % 26) + 65;
                result += String.fromCharCode(shiftedCode);
            }
            else if (code >= 97 && code <= 122) {
                let shiftedCode = ((code - 97 + shift) % 26) + 97;
                result += String.fromCharCode(shiftedCode);
            }
        } else result += char;
    }
    return result;
}

encryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    const shift = parseInt(shiftInput.value) % 26;
    
    if (!text) {
        alert("Будь ласка, введіть текст!");
        return;
    }

    outputResult.textContent = caesarCipher(text, shift, false);
});

decryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    const shift = parseInt(shiftInput.value) % 26;

    if (!text) {
        alert("Будь ласка, введіть текст для розшифрування!");
        return;
    }

    outputResult.textContent = caesarCipher(text, shift, true);
});