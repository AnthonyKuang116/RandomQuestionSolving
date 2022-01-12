function reverseString() {
    const string = "hello world";
    console.log(string.split("").reverse().join(""));
    return string.split("").reverse().join("");
}

reverseString();


//without using builtin function
function reverseStringTwo() {
    const string = "testing";
    let reverseString = "";

    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    console.log(reverseString)
    return reverseString;
}

reverseStringTwo();