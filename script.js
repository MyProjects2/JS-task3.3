'use strict'
var userInput = prompt('Напишите любое слово');
function calculateVowels(string) {
    var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'э', 'ю', 'я', 'А', 'Е', 'Ё', 'И', 'О', 'У', 'Э', 'Ю', 'Я'];
    var array = [];
    for (var i = 0; i <= vowels.length; i++){
        var position = 0;
        while (true) {
            var foundPos = string.indexOf(vowels[i], position);
            if (foundPos == -1) break;
            array.push(foundPos);
            position = foundPos + 1; 
        }
    }
        return array.length;  
}
console.log('Количество гласных букв в слове: ' + calculateVowels(userInput));























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
