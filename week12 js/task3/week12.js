const weight = document.querySelector('#weight');
const height =  document.querySelector('#height');
const result = document.querySelector('#result');
const info = document.querySelector('#info');

function calculateBMI(){
const weightValue = +weight.value;
const heightValue = +height.value;
  if (typeof weightValue !== 'number' || typeof heightValue !== 'number') {
    //console.log('Значения веса и роста должны быть числовыми');   не срабвтывает код;(
    alert('Значения веса и роста должны быть числовыми'); 
    return;
  }
   if ( weightValue === '' || heightValue === '' ) {
    
   alert('Введите значения веса и роста'); 
   //console.log('Введите значения веса и роста');
   return;
  } 

  const heightSqrt = Math.pow(heightValue, 2);
  const imt = weightValue / heightSqrt;

  const imtResult = Math.round(imt*100)/100;
    console.log (imtResult);
    return imtResult;
}

const buttonClick = document.getElementById('buttonClick');
buttonClick.addEventListener('click', function(){
  const bmiResult = calculateBMI();

    if (bmiResult !== undefined) {
    result.textContent = `Ваш ИМТ: ${bmiResult}`;
    if (bmiResult < 18.5) {
      info.textContent = 'ИМТ менее 18.5: Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
      info.textContent = 'ИМТ от 18.5 до 24.9: Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
    } else if (bmiResult >= 25.0 && bmiResult <= 29.9) {
      info.textContent = 'ИМТ от 25.0 до 29.9: Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
    } else if (bmiResult >= 30.0 && bmiResult <= 34.9) {
      info.textContent = 'ИМТ от 30.0 до 34.9: Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
    } else if (bmiResult >= 35.0 && bmiResult <= 39.9) {
      info.textContent = 'ИМТ от 35.0 до 39.9: Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
    } else if (bmiResult >= 40.0) {
      info.textContent = 'ИМТ 40 и выше: Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
    } else  {alert( 'Проверьте правильность введенных данных');
  }}
});