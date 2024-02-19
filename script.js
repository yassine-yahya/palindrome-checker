let checkBtn = document.querySelector("#check-btn");
let resultEl = document.querySelector("#result");
let textInput = document.querySelector("#text-input").value;


//check if input is empty
function checkEmptyInput(){
let textInput = document.querySelector("#text-input").value;
if (textInput === '') {
    alert("Please input a value")
    window.location.reload();
}
}

//check if input is palindrome
function checkPalindrome(str) {

    if (typeof str !== 'string') {
        console.error("Input is not a string");
        return;
    }

    console.log("Input received:", str);

        let cleanString = str.replace(/[\W_]/g, "") .toLowerCase();
        let reversedString = cleanString.split('').reverse().join('');
        if (cleanString === reversedString) {
            resultEl.textContent = str + ' is a palindrome';
        } else {
            resultEl.textContent = str + ' is not a palindrome';
        }

    }




//handle the 2 function when a button is clicked
function clickHandle() {
    checkEmptyInput();
    let textInput = document.querySelector("#text-input").value;
    checkPalindrome(textInput)
}

checkBtn.addEventListener('click',clickHandle);