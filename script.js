'use strict'
var userInput = prompt('Напишите любое слово');
//const countVowels = str => Array.from(str).filter(letter => 'aeёиоуэюяАЕЁИОУЭЮЯ'.includes(letter)).length;
//console.log(`Количество гласных букв в слове: ${countVowels(userInput)}`);
function countVowels(string) {
    var arrayOfLetters = Array.from(string);
    var str = 'аеёиоуыэюяАЕЁИОУЭЮЯ';
    var filtered = arrayOfLetters.filter(function(letter) {
        return str.includes(letter);   
    });
    return filtered.length;
}
alert('Количество гласных букв в слове: ' + countVowels(userInput));

























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
