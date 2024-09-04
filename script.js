const input = document.querySelector('input');
let string = "";
const buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(button.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if(button.innerHTML == "=") {
            try {
                string = eval(string);
            }
            catch(e) {
                alert("Enter Valid Data");
                string = "";
                input.value = string;
            }
            input.value = string;
        }
        else if(button.innerHTML == "&lt;") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string = string + button.innerHTML;
            input.value = string;
        }
    })
});