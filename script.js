let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })

})

window.addEventListener('keydown', (e) => {  // keyboard support 
    let button;

    if (e.key == 'Enter' || e.key == '=') {
        button = arr.find(button => button.innerHTML == '=');
    }
    else if (e.key == 'Backspace' || e.key == 'Delete') {
        button = arr.find(button => button.innerHTML == 'DEL');
    }
    else if (e.key == 'Escape') {
        button = arr.find(button => button.innerHTML == 'AC');
    }
    else {
        button = arr.find(button => button.innerHTML == e.key);
    }

    if (button) {
        e.preventDefault();
        button.click();
    }
});
