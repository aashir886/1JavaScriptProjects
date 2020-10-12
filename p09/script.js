// Get DOM Elements
const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const description = document.getElementById('description')
const amount = document.getElementById('amount')


// Dummy transactions
const dummyTransations = [
    { id: 1, description: 'Salary', amount: 100000 },
    { id: 2, description: 'Electric Bill', amount: -50000 },
    { id: 3, description: 'Internet Bill', amount: -10000 },
    { id: 4, description: 'Profit', amount: 50000 }
];

let transactions = dummyTransations;


// function to generet an ID
function generetID() {
    return Math.floor(Math.random() * 100000000);
}



// Add a new transation from the form
function addTransation(e) {
    e.preventDefault();

    if( description.value.trim() === '' || amount.value.trim() === '' ) {
        alert('Please enter the valide description and transaction amount.')
    } else {
        const transaction = {
            id: generetID(),
            dsscription: description.value,
            amount: +amount.value
            };

        transactions.push(transaction);

        addTransationUI(transaction);
        
        updateSums();

        description.value = '';
        amount.value = '';
    }
}


// function to remove transation
function deleteTransation(id) {
    transactions = transactions.filter( transaction => transaction.id != id );
    init();
}






// function to display transation in transation history
function addTransationUI(transaction) {
    // Classify if income or expense
    const type = transaction.amount > 0 ? '+' : '-';

    // Create DOM Element for list item
    const item = document.createElement('li');

    // Add class for list item based on type
    item.classList.add( transaction.amount > 0 ? 'plus' : 'minus');


    item.innerHTML = `
        ${transaction.description}
        <span>${type}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="deleteTransation(${transaction.id})">X</button>
    `;


    list.appendChild(item);
}





// function to update the balance, income, and expense summaries
function updateSums() {
    // create array of transation amount from transation array
    const amounts = transactions.map( transaction => transaction.amount );
   
    // calculat total value for balance 
    const total = amounts
                    .reduce( (acc, amount) => ( acc += amount ), 0 )
                    .toFixed(2);
    // calculate total income 
    const income = amounts
                    .filter( amount => amount > 0 )
                    .reduce( (acc, amount) => ( acc += amount ), 0 )
                    .toFixed(2);



    // calculate total expense
    const expense = amounts
                    .filter( amount => amount < 0 )
                    .reduce( (acc, amount) => ( acc += amount ), 0 )
                    .toFixed(2)

    // update balance in DOM
    balance.innerText = `${total} PKR`


    // update income in DOM
    moneyPlus.innerText = `${income} PKR`

    // update  expense in DOM
    moneyMinus.innerText = `${expense} PKR`
}







// functiuon to initialize the app, agr page reload ho to clean hojaye
function init() {
    list.innerHTML = '';


    transactions.forEach(addTransationUI);
    updateSums();
}

// event listners
// 1. Even listner for form submit
form.addEventListener('submit', addTransation);


init();
