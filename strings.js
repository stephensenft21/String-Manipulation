function reverseString(testString) {
    return testString.split("").reverse().join("");
}

function alphabits(testString) {
return testString.split("").sort().join("")
}

function palindrome(testString) {
    return testString == testString.split("").reverse().join("")

    }


var testString = "Hey Chris";
reverseString(testString);
alphabits(testString);
palindrome(testString);

