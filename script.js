document.addEventListener('DOMContentLoaded', () => {
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

   
    encryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        const encryptedText = reverseString(text);
        outputText.value = encryptedText;
    });

   
    decryptBtn.addEventListener('click', () => {
        const text = outputText.value;
        const decryptedText = reverseString(text);
        outputText.value = decryptedText;
    });

    
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.value)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => alert('Error al copiar el texto: ' + err));
    });
});
