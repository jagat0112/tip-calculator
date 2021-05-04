const billAmount = document.getElementById("amt");
const submit = document.querySelector("form");
const service = document.querySelector(".select-tip");
const person = document.querySelector(".no-person");

let totalAmt, serviceType, noPerson, tip;

service.addEventListener("change", (e) => {
  serviceType = e.target.value;
});

billAmount.addEventListener("change", (e) => {
  totalAmt = e.target.value;
});
person.addEventListener("change", (e) => {
  noPerson = e.target.value;
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if ((!totalAmt, !noPerson)) {
    alert("Fill all the fields!");
  }

  tip = ((serviceType / 100) * totalAmt) / noPerson;
  console.log(tip);
  document.querySelector(".tip").innerHTML += `TIP AMOUNT $${tip} Each!`;
});
