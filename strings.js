function reverseString(testString) {
    return testString.split("").reverse().join("");
}

function alphabits(testString) {
return testString.split("").sort().join("")
}

function palindrome(testString) {
    return testString == testString.split("").reverse().join("")
     
    }
    

var testString = "variable,eye";

let reverse = reverseString(testString);
let alpha = alphabits(testString);
 if (palindrome(testString)) {
     let display = document.getElementById("display-container")
     display.innerHTML = "Your string is a palidrome"
 }

 let displayReverse = document.getElementById("reverse-container")
 let displayAlpha = document.getElementById("alpha-container")
 let input = document.getElementById("input-box").addEventListener("keyup",function(event){
     event.preventDefault()
     if(event.keyCode === 13) {
        document.getElementById("submit-button").click()
     }
 })
  document.getElementById("submit-button")

 displayReverse.innerHTML = reverse
 displayAlpha.innerHTML = alpha


 