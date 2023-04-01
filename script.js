//Shows if a binary operation is currently displayd
let operationIn = false;

//buttons
function pressEquals(){
    operationIn = false;
}

function pressRomanToArabic(){

}

function pressOperation(){
    if(operationIn){

    }else{
        operationIn = true
    }
}

function deletion(){
    operationIn = false;
}

//calculate and return the result
function calculate(){
    let arabicResult;

    return arabicResult;
}

//Convert

//Converts arabic number to roman numeral and returns it
function convertArabicToRoman(arabicNumber){
    const numbrersAndNumerals = [
        {number: 1000, roman: '&#8559;'},
        {number: 900, roman: '&#8557;'},
        {number: 500, roman: '&#8558;'},
        {number: 400, roman: '&#8557;&#8558;'},
        {number: 100, roman: '&#8557;'},
        {number: 90, roman: '&#8553;&#8557;'},
        {number: 50, roman: '&#8556;'},
        {number: 40, roman: '&#8553;&#8556;'},
        {number: 10, roman: '&#8553;'},
        {number: 9, roman: '&#8544;&#8553;'},
        {number: 5, roman: '&#8548;'},
        {number: 4, roman: '&#8544;&#8548;'},
        {number: 1, roman: '&#8544;'}
    ];


    let romanLetter = '';
    let number = arabicNumber;

     for(let i = 0; i < numbrersAndNumerals.length; i++){
        if(numbrersAndNumerals[i].number <= number){
            number = number - numbrersAndNumerals[i].number;
            romanLetter = romanLetter + numbrersAndNumerals[i].roman;
            i--;
        }
     }
     return romanLetter;
}

//Convert roman numeral to arabic number and returns it
function romanToArabic(romanNumeral) {
    const romanNumerals = {
      "&#8544;": 1,
      "&#8548;": 5,
      "&#8553;": 10,
      "&#8556;": 50,
      "&#8557;": 100,
      "&#8558;": 500,
      "&#8559;": 1000
    };
  
    let arabicNumeral = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      let currentNumeral = romanNumerals[romanNumeral[i]];
      let nextNumeral = romanNumerals[romanNumeral[i + 1]];
        if (nextNumeral > currentNumeral) {
        arabicNumeral += nextNumeral - currentNumeral;
        i++;
      } else {
        arabicNumeral += currentNumeral;
      }
    }
      return arabicNumeral;
  }


  

