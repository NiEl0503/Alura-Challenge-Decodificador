document.getElementById('mensaje').addEventListener('input', function() {
    const inputText = this.value;
    const searchImage = document.getElementById('searchImage');
    const defaultMessage = document.getElementById('defaultMessage');
    const inputMessage = document.getElementById('inputMessage');

    if (inputText.trim() !== '') {
        searchImage.style.display = 'none';
        defaultMessage.style.display = 'none';
        inputMessage.style.display = 'block';
        inputMessage.textContent = inputText;
    } else {
        searchImage.style.display = 'block';
        defaultMessage.style.display = 'block';
        inputMessage.style.display = 'none';
        inputMessage.textContent = '';
    }
});

function criptografarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
}

function criptografar() {
    let texto = document.getElementById('mensaje').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!/^[a-z\s]+$/.test(texto)) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    let textoCriptografado = criptografarTexto(texto);
    
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${textoCriptografado}</p>`;

    document.getElementById('mensaje').value = '';

    document.getElementById('searchImage').style.display = 'none';
    document.getElementById('defaultMessage').style.display = 'none';
    document.getElementById('inputMessage').style.display = 'none'; 
}
