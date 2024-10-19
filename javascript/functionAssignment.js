let arr = [1, 5, 13, 24, 44, 66];
let userNum = 40;
let newArr = [];
function largerNum() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > userNum) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
// largerNum();




let country = ["Australia", "Germanythegreat", "UnitedStatesofAmerica"]

function largeStr() {
    let largestlength = country[0];
    for (let i = 1; i < country.length; i++) {
        if (largestlength.length < country[i].length) {
            largestlength = country[i];

        }
    }
    console.log(largestlength);
}

// largeStr();



function vowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }

    }
    return count;
}

// console.log(vowels("aeiou"));



let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;

}
// console.log(generateRandom(5,30));


let str = "abcdabcdeeggff";
let unique = "";
function uniqueStr(){
    for (let i = 0; i < str.length; i++) {
        if(unique.indexOf(str[i]) == -1){
            unique = unique + str[i];
        }
        
    }
    console.log(unique);

}

uniqueStr();