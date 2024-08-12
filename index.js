// using onclick

// number counter
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}


// random number generator
const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 100;
let randomNum;

myBtn.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    myBtn.textContent = `${randomNum}`;
}
document.addEventListener("click", function (event) {
    const isClickInsideButton = myBtn.contains(event.target);

    if (!isClickInsideButton) {
        myBtn.textContent = "Roll!";
    }
});

// ternary operator = shortcut to if{} and else{} statements,
//                    helps to assign a variable based on a condition.
//                    condition ? "condeIfTrue" : "codeIfFalse";
// example:
// let time = 9;
// let greetings = time < 12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greetings);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;

// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)

// (This code calculates a discount based on the purchase amount.
//  If the purchase amount is greater than or equal to 100,
//   a discount of 10% is applied; otherwise, no discount is applied. Then,
//    it calculates the total amount after applying the discount and logs it to the console.)

// SWITCH = can be an efficient replacement to many else if statements
// example: distinguish the day's name from different day number.
// let day = 6;

// switch (day) {
//     case 1:
//         console.log("It's Sunday Today!");
//         break;
//     case 2:
//         console.log("It's Monday Today!");
//         break;
//     case 3:
//         console.log("It's Tuesday Today!");
//         break;
//     case 4:
//         console.log("It's Wednesday Today!");
//         break;
//     case 5:
//         console.log("It's Thursday Today!");
//         break;
//     case 6:
//         console.log("It's Friday Today!");
//         break;
//     case 7:
//         console.log("It's Saturday Today!");
//         break;
//     default:
//         console.log(`${day} is not a day!`)
// }
// method chaining = calling one method after another in one continous line of code.
// example: make any username input to convert the first letter into uppercase and all the remaining letters into lower case.
// let username = window.prompt("Enter your username: ");

// username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
// console.log(username);

// while loop = repeat some code WHILE some condition is true & while loop can repeat some code infinitely

// let loggedIn = true;
// let username;
// let password;
// while (username === "" || username === null) {
//     username = window.prompt("Enter your name");
// }
// console.log(`Hello ${username}`);


// while (!loggedIn) {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if (username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("Logged In successful");
//     }
//     else {
//         console.log("Invalid credentials, Please try again");
//     }
// }
// do{
//     username = window.prompt(`Enter your Username`);
//     password = window.prompt(`Enter your Password`);

//     if (username === "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("Log in successful!");
//     }
//     else {
//         console.log("Invalid input, Please try again");
//     }
// } while (!loggedIn);

// for loop = repeat some code a LIMITED amount of times, u can use (continue;) to skip and (break;) to stop
// examples: 1. console log "Hello" 3x
//           2. console log i countdown from 10-1 then console log "Happy New Year" after the countdown.
// for (i = 0; i <= 2; i++) {
//     console.log("Hello")
// }

// for (i = 10; i > 0; i--) {
//     console.log(i);
// } console.log("Happy New Year!");
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// console.log(answer);

// variable scope = where a variable is recognized and accessible (local vs global)

// temperature conversion program

const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C"
    }
    else {
        result.textContent = "Please select a unit first"
    }
}

// spread operator = ... allows an iterable such as an array or string to be
//                  expanded into seperate elements (unpacks the elements)

// let fruits = ["apple", "mango", "banana"];
// let vegetables = ["carrot", "potato", "peppers"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);


// rest parameters = (...rest) allow a function work with a variable number of
//                     arguments by bundling them into an array.

//                     spread = expands an array into seperate elements
//                     rest = bundles seperate elements into an array


// dice roller

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`)
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

// random password generator

function generatedPass() {
    const passwordLength = document.getElementById("length").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    generatedPassword = generatePass(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("resultPass").innerText = `${generatedPassword}`;
}

function generatePass(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(At least 1 character set needs to be selected)";
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// to-do list

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        console.log("Please write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
    }
    inputBox.value = "";
}


// callback = a function that is passed as an argument to another function.

//             used to handle asynchronous operations:
//             1. Reading a File
//             2. Network requests
//             3. Interacting with databases

//             "Hey, when you're done, call this next."

// forEach() = method used to iterate over the elements of an Array
//             and apply a specified function (callback) to each element

//             array.forEach(callback)
//             element, index, array are provided

// .map() = accepts a callback and applies that function to each element of
//         an array, then return a new array

// In programming, particularly in languages like JavaScript, the
// .map() function is used to transform elements in an array.
// It applies a given function to each element of an array and
// returns a new array with the results of applying that function
// to each element.

// .filter() = creates a new array by filtering out elements

// let day = 4;

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#taskList li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('.task-text').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTaskToDOM = (task) => {
        const taskItem = document.createElement('li');
        taskItem.className = task.completed ? 'completed' : '';
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        taskItem.appendChild(taskText);

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Uncomplete' : 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            completeButton.textContent = taskItem.classList.contains('completed') ? 'Uncomplete' : 'Complete';
            saveTasks();
        });
        taskItem.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
            saveTasks();
        });
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const task = { text: taskText, completed: false };
            addTaskToDOM(task);
            saveTasks();
            taskInput.value = '';
        }
    });

    loadTasks();
});

// digital clock

function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}: ${minutes}:${seconds}:${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

// stopwatch

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; 11

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// fetch = function used for making HTTP requests to fetch resources.
//             (JSON style DataTransfer, images, files)
//             Simplifies asynchronous data fetching in JavaScript and
//             used for interacting with APIs to retrieve and send
//             data asynchronously over the web.
//             fetch(rrl, {options})
//             fetch(url, {method: "GET"}) to get a resource
//             fetch(url, {method: "POST"}) to send data
//             fetch(url, {method: "PUT"}) to replace data
//             fetch(url, {method: "DELETE"}) to delete data

fetchPokemon();
async function fetchPokemon() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    catch (error) {
        console.log(error);
    }
}

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "73ecb2d7c3f9b957757dad9ad665eed2";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            display.error(error);
        }
    }
    else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        default:
            return "☁️";

    }


}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



