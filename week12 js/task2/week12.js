//1 
const textLuk = document.querySelector('#textLuk');
const textLength = textLuk.textContent.length;
console.log(textLength);
//2
const text = textLuk.textContent;
const result = text.replace( /;/g, ';\n');
console.log(result);
//3
const substring = text.replace( / /g, '');
console.log(substring); 
//4
const newText = result.substring(32,54)
console.log(newText);
//5
const replacedText = newText.replace(/клён/g, 'дубе');
console.log(replacedText); 
//6
const replacedText2 = result.toUpperCase();
console.log(replacedText2); 
//7
const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(replacedText3); 
//8
const index = text.indexOf('моря');
console.log(index); 
//9 почему-то на первых 2 позициях пробел
console.log(replacedText.charAt(2));
const modifiedText= replacedText.charAt(2).toUpperCase() + replacedText.slice(3);
console.log(modifiedText);  
//10
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);


