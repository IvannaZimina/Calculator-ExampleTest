const resNumberElem = document.querySelector('.resNumber');

const calculatorForm = document.forms.calculatorForm;
calculatorForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const numberOne = Number(formData.get('numberOne'));
    const numberTwo = Number(formData.get('numberTwo'));
    const actions = formData.get('actions');
    
    let result = null;

    switch(actions) {
        case "+": {
            result = Math.floor(numberOne + numberTwo);
        };
        break;
        case "-": {
            result = Math.floor(numberOne - numberTwo);
        };
        break;
        case "*": {
            result = Math.floor(numberOne * numberTwo);
        };
        break;
        case "/": {
            if(numberTwo === 0) {
                result = "You cannot divide by 0."
            } else {
                result = Math.floor(numberOne / numberTwo);
            };
        };
        break;
        default: {
            return ('Try again');
        };
    };

    resNumberElem.innerHTML = result;

    document.forms['calculatorForm'].reset();
});
