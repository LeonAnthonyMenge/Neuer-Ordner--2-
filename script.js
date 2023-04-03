//Shows if a binary operation is currently displayd
let operationIn = false;
//Shows if the number is arabic (true) or roman
let numberIsArabic = false

//buttons
function pressEquals(){
  if(numberIsArabic){
    romanToArabic();
  }
    operationIn = false;

    let html = document.getElementById("container").innerHTML;
    let split = html.split(" ");
    let firstArabicNumber = convertRomanToArabic(split[0]);
    let secondArabicNumber = convertRomanToArabic(split[2]);
    let arabicString = firstArabicNumber + split[1] + secondArabicNumber;
    let arabicResult = eval(arabicString);
    let romanResult = convertArabicToRoman(arabicResult);

    if(arabicResult < 0){
      container.innerHTML = "Error";
    }else{
      container.innerHTML = romanResult;
    }
}

function pressRomanToArabic(){
  if(numberIsArabic){
    if(operationIn){ 
      pressEquals(); 
    }else{ 
      romanToArabic(); 
    }
  }else{  
    if(operationIn){ pressEquals(); }
    
      numberIsArabic = true;
      let html = document.getElementById("container").innerHTML;
      html = html.trim();
      let arabicHTML = convertRomanToArabic(html);
      container.innerHTML = arabicHTML;
    
  }
}

function addOperation(operation){
    if(numberIsArabic){
      romanToArabic();
    }
    if(operationIn){

    }else{
        operationIn = true
        document.getElementById("container").innerHTML += operation;
    }
}

function addRomanNumeral(numeral){
  if(numberIsArabic){
    romanToArabic();
  }  

  document.getElementById("container").innerHTML += numeral;
}

function deletion(){
    operationIn = false;
    numberIsArabic = false;

    container.innerHTML = "";
}

//if html in container shows arabic number
function romanToArabic(){
      numberIsArabic = false;
      let html = document.getElementById("container").innerHTML;
      html = html.trim();
      let romanNumeral = convertArabicToRoman(html);
      container.innerHTML = romanNumeral;
}


//Convert

//Converts arabic number to roman numeral and returns it
function convertArabicToRoman(arabicNumber){
    const numbrersAndNumerals = [
        {number: 1000, roman: 'M'},
        {number: 900, roman: 'CM'},
        {number: 500, roman: 'D'},
        {number: 400, roman: 'CD'},
        {number: 100, roman: 'C'},
        {number: 90, roman: 'XC'},
        {number: 50, roman: 'L'},
        {number: 40, roman: 'XL'},
        {number: 10, roman: 'X'},
        {number: 9, roman: 'IX'},
        {number: 5, roman: 'V'},
        {number: 4, roman: 'IV'},
        {number: 1, roman: 'I'}
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
function convertRomanToArabic(romanNumeral) {
    const romanNumerals = {
      "I": 1,
      "IV": 4,
      "V": 5,
      "IX": 9,
      "X": 10,
      "XL": 40,
      "L": 50,
      "XC": 90,
      "C": 100,
      "CD": 400,
      "D": 500,
      "CM": 900,
      "M": 1000
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


  

