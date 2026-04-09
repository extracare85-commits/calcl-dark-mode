

// first  off all we have to select the input and buttons from the html document and then make it a Array. then we have to add event listener to each button and then we have to check if the button is equal to = then we have to evaluate the string and then we have to display the result in the input box otherwise we have to add the value of the button to the string and then we have to display the string in the input box.

// select the input and buttons from the html document
let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";       //  empty string to store the value of the butotns.
let arr = Array.from(buttons); 
//  and then make it a array
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
    else if (e.target.innerHTML == 'AC') {
        string = "";
        input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length- 1);
        input.value = string;
    }
    else{ string += e.target.innerHTML;
    input.value = string;
        }}
    
    )});

    
    // adding a dark mode logic to the calculator. 

    window.onload = function() {
    // confirm() ek browser notification dikhayega jisme "OK" aur "Cancel" hoga
    let askMode = confirm("Welcome! Kya aap Dark Mode on karna chahte hain?");

    if (askMode == true) {
        // Agar user 'OK' dabata hai toh dark mode on ho jayega
        document.body.classList.add('dark-mode');
    } else {
        // Agar user 'Cancel' dabata hai toh Light mode hi rahega
        document.body.classList.remove('dark-mode');
    }
}