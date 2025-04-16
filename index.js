let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    let result = eval(display.innerText);
                    if (result === Infinity || result === -Infinity || isNaN(result)) {
                        display.innerText = "Error";
                    } else {
                        display.innerText = result;
                    }
                } catch {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if ( display.innerText === "Error") {
                    display.innerText = '';
                } else {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});