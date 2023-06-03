let balance = 1000;

//if true we are deposting, if not we are withdrawing
let deposit = true;

let display = document.querySelector(".display");

const addAmount = () => {};

const showButtons = (status) => {
  console.log("Showing buttons");
  deposit = status;
  console.log(deposit);
  document.querySelector(".valueButtons1").style = "display:block";
  document.querySelector(".valueButtons2").style = "display:block";
};

const closeButtons = () => {
  document.querySelector(".valueButtons1").style = "display:none";
  document.querySelector(".valueButtons2").style = "display:none";
};
const displayMessage = (message) => {
  display.innerHTML = message;
};

const initialBalance = () => {
  display.innerHTML = "Welcome your starting balance is $" + balance;
};

const checkBalance = () => {
  display.innerHTML = "Your balance is currently $" + balance;
};

const removeMoney = (amount) => {
  if (balance - amount < 0) {
    alert("You are withdrawing more than you have left");
  } else {
    balance -= amount;
    console.log(balance);
    displayMessage("Your new balance is $" + balance);
  }
};

const changeValue = (value) => {
  //Use a boolean value to determine if we add or withdraw money
  console.log(parseInt(value));

  if (deposit === "true") {
    console.log("depoisting cash");
  } else {
    console.log("removing cash");
  }
};

const removeHundred = () => {
  if (balance - 100 < 0) {
    alert("You are withdrawing more than you have left");
  } else {
    balance -= 100;
    console.log(balance);
    displayMessage("Your new balance is $" + balance);
  }
};

const addHundred = () => {
  balance += 100;
  displayMessage("Your new balance is $" + balance);
};

initialBalance();
