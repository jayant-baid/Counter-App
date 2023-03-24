const countValue = document.querySelector("#counter");
// console.log(countValue);

// Normal Function
function increment() {
    // we can use innerText
    let value = parseInt(countValue.textContent);
    // console.log(typeof value);
    value++;
    countValue.textContent = value;
};

// Arrow Function
const decrement = () => {
    let value = parseInt(countValue.textContent);
    value--;
    countValue.textContent = value;
};

//? Using AddEventListener
// const negEl = document.querySelector("#negativeBtn");
// negEl.addEventListener("click", () => {
//     let value = parseInt(countValue.textContent);
//     value--;
//     countValue.textContent = value;
// })