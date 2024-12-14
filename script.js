let weight = document.querySelector('.weightInput');
let heigth = document.querySelector('.heightInput');
let	btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', ()=>{

let weightVal = weight.value;
let heigthVal = heigth.value;

if (weightVal == "" || isNaN(weightVal) || heigthVal == ""  || isNaN(heigthVal)){
	result.innerText = "Please Enter Valid Wseight or Heigth"
	result.style.color = "red";
}else{

let heigthMeter = heigthVal/100;
let heigthMeterSquere = heigthMeter * heigthMeter;

bmi = weightVal/heigthMeterSquere;
finalBmi = bmi.toFixed(1);

if (finalBmi < 18.5) {
	result.innerText = "Under weight " + finalBmi
	result.style.color = "red"
}
else if (finalBmi > 18.5 && finalBmi <= 24.9) {
	result.innerText = "Normal weight " + finalBmi
	result.style.color = "green"
}
else if (finalBmi >= 25 && finalBmi <= 29.9) {
	result.innerText = "Over weight " + finalBmi
}
else if (finalBmi >= 30) {
	result.innerText = "Obesity " + finalBmi
	result.style.color = "red"
}
weight.value = '';
heigth.value = '';
console.log(finalBmi)
}})

