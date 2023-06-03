let balance = 1000;

//change amount to be adjusted for input withdrawel
let changeAmount = 10;

let ogChange = 10;

let display = document.querySelector(".display");

const addAmount = () => {};

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

const changeValue = () => {};

const removeHundred = () => {
  if (balance - 100 < 0) {
    alert("You are withdrawing more than you have left");
  } else {
    balance -= 100;
    console.log(balance);
    displayMessage("Your new balance is $" + balance);
  }
};

const addHunderd = () => {
  balance += 100;
  displayMessage("Your new balance is $" + balance);
};

initialBalance();
