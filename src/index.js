document.getElementById('mensaje').addEventListener('input', function() {
    const inputText = this.value;
    const searchImage = document.getElementById('searchImage');
    const defaultMessage = document.getElementById('defaultMessage');
    const inputMessage = document.getElementById('inputMessage');
    const outputDiv = document.getElementById('output');
    
    if (inputText.trim() !== '') {
        searchImage.style.display = 'none';
        defaultMessage.style.display = 'none';
        inputMessage.style.display = 'block';
        inputMessage.textContent = inputText;
        outputDiv.innerHTML = '';
    } else {
        searchImage.style.display = 'block';
        defaultMessage.style.display = 'block';
        inputMessage.style.display = 'none';
        inputMessage.textContent = '';
        outputDiv.innerHTML = '';
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

function descriptografarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
}

function descriptografar() {
    let texto = document.getElementById('mensaje').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!/^[a-z\s]+$/.test(texto)) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    let textoDescriptografado = descriptografarTexto(texto);
    
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${textoDescriptografado}</p>`;

    document.getElementById('mensaje').value = '';

    document.getElementById('searchImage').style.display = 'none';
    document.getElementById('defaultMessage').style.display = 'none';
    document.getElementById('inputMessage').style.display = 'none'; 
}
