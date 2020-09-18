// Getting DOM Elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user')
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const sortButton = document.getElementById('sort');
const totalButton = document.getElementById('calculate-total');

// Initializing data Array
let data = [];


// Create initial users
generateRandomUser();
generateRandomUser();
generateRandomUser();







// Function to fetch Rendom user from API
// API: randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    
    const user = data.results[0]
    
    const newUser = {
        name: `${user.name.first} ${user.name.last}` ,
        worth: Math.round(Math.random()*1000000)
    };

    addData(newUser);
}

//Function to double the networth of each user
function doubleWorth() {
    data = data.map( item => {
        return { ...item, worth: item.worth * 2 }
    })

    updateDOM();
}


//function to sort the user by richest users
function sortRichest() {
    data.sort( (a, b) => b.worth - a.worth );

    updateDOM();
}

//function to filter the users and only show millioniares
function showMillionaires() {
    data = data.filter(
        item => item.worth > 1000000
    );
    updateDOM();
}

// function to calculate the total net worth all users
function calculateTotalNetWorth() {
    const totalWorth = data.reduce(
        (acc, item) => (acc += item.worth), 0
    );












    const totalNetWorthElement = document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(totalWorth)}</strong></h3>`;
    main.appendChild(totalNetWorthElement);
}












// Add newly generated user into the data array 
function addData(newUser) {
    data.push(newUser);

    updateDOM();
}


// function to update the UI with DOM
function updateDOM(inputData = data) {
    main.innerHTML = '<h1><strong>Name</strong>Net Worth</h1>';

    inputData.forEach( item  => {
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong> ${formatCurrency(item.worth)}`;
        main.appendChild(element);
    });
}

// Function to format a number as a currency
function formatCurrency(num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listners
// 1. Add user Event Listner
addUserButton.addEventListener('click', generateRandomUser)

// 2. Add Double money Event Listner
doubleMoneyButton.addEventListener('click', doubleWorth);

// 3. Add sor Even Listner
sortButton.addEventListener('click', sortRichest);

// 4. Add show millioniares Event Listner
showMillionairesButton.addEventListener('click', showMillionaires);

// 5. Add calculate total wealth Event Listner
totalButton.addEventListener('click', calculateTotalNetWorth);


