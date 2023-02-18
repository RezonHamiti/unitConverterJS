/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.querySelector("#convert-btn");
let numInput = document.querySelector("#number-input");
let length = document.querySelector("#length");
let volume = document.querySelector("#volume");
let mass = document.querySelector("#mass");

convertBtn.addEventListener("click", convertNum);


function convertNum() {
    
    let num = numInput.value;
    let meterResult = num * 3.281;
    let feetResult = num / 3.281;
    let literResult = num * 0.264;
    let gallonResult = num / 0.264;
    let kgResult = num * 2.204;
    let poundResult = num / 2.204;
 length.textContent = `${num} meters = ${meterResult.toFixed(3)} feet | ${num} feet = ${feetResult.toFixed(3)} meters`
 volume.textContent = `${num} liters = ${literResult.toFixed(3)} gallons | ${num} gallons = ${gallonResult.toFixed(3)} liters`
 mass.textContent = `${num} kilograms = ${kgResult.toFixed(3)} pounds | ${num} gallons = ${poundResult.toFixed(3)} kilograms`


}
