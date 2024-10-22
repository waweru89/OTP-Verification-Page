let input = [...document.querySelectorAll('input')];

input.forEach((element, index) => {
    element.addEventListener('keyup', (event) => {
        
        if (element.value.length === 1 && index + 1 < input.length) {
            input[index + 1].focus();
        }
        
        if (event.key === 'Backspace' && element.value.length === 0 && index > 0) {
            input[index - 1].focus();
        }
    });
});
