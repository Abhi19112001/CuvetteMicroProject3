let String = "";
const userInput = document.querySelector(".user-input");
const resetKey = document.querySelector(".reset-key");
const answerKey = document.querySelector(".answer-key");
const deleteKey = document.querySelector(".delete-key");
const keys = document.querySelectorAll(".number");

const keyarray = Array.from(keys);

const keyhandler = (event) => {
  console.log("keyClicked: ", event.target.innerText);
  const value = event.target.innerText;
  userInput.value = userInput.value + value;
};
const answerHandler = () => {
  console.log("answer key click");
  const expression = userInput.value;
  const result = eval(expression);
  userInput.value = result;
};
const deleteHandler = () => {
  console.log("delete key clicked");

  intialvalue = userInput.value;
  updatedvalue = intialvalue.substring(0, intialvalue.length - 1);
  userInput.value = updatedvalue;
};
const resetHandle = () => {
  console.log("Reset key clicked");
  userInput.value = "";
};
keyarray.forEach((key) => key.addEventListener("click", keyhandler));
answerKey.addEventListener("click", answerHandler);
deleteKey.addEventListener("click", deleteHandler);
resetKey.addEventListener("click", resetHandle);
