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
