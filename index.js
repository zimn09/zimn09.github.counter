let number = document.getElementById("num");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let num =0;
let inpt = document.getElementById("inpt");
let sbmit = document.getElementById("submit")
let reset = document.getElementById("reset")

number.textContent = num;

plus.addEventListener("click", () => {
    num++;
    number.textContent = num;
    inpt.value = num;
});

minus.addEventListener("click", () => {
    num--;
    number.textContent = num;
    inpt.value = num;
});
sbmit.onclick = function(){
    num = parseInt(inpt.value)
    number.textContent = num;
}
reset.onclick = function(){
    num = 0;
    number.textContent = num;
    inpt.value = "";
}
