// Get DOM Elements for functionlity
//Cards container
const cardContainer = document.getElementById('card-container');
//navigation
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentCard = document.getElementById('current-card');
//Add card container 
const addCardContainer = document.getElementById('add-card-container');
const addCardBtn = document.getElementById('add-card');
const closeCardBtn = document.getElementById('close-card');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const addNewCardBtn = document.getElementById('add-card-btn');
//Clear cards
const clearBtn = document.getElementById('clear-btn');



// Track current card
let currentActiveCard = 0;


// Collectiong of Cards DOM Elements
const cardElements = [];

// Collection of card data
const cardsData = getCardsData();




// functions
// 1. function to create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}


// 2. function to create a card
function createCard(data, index) {
    // create the div for the card
    const card = document.createElement('div');
    // assign the card class
    card.classList.add('card');
    // check fpr the first card and assign the class
    if (index === 0) {
        card.classList.add('active');
    }
    // creat the innerHTML for a card
    card.innerHTML = `
            <div class="inner-card">
                <div class="card-front">
                    <p>${data.question}</p>
                </div>
                <div class="card-back">
                    <p>${data.answer}</p>
                </div>
                </div>
            `;
    // Event listner to flip the card onclick
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    //Add the newly created card the collection of card DOM Elements
    cardElements.push(card);
    // add the card in tha DOM
    cardContainer.appendChild(card);
    // display the current card value
    updateCurrentCardText();
}

// 3. function to show the current card total number of card in the navigation
function updateCurrentCardText() {
    currentCard.innerHTML = `<p>${currentActiveCard + 1}/${cardElements.length}</p>`
}


// 4. Get cards data from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}


// 5. functiom to save cards data to local storage
function saveCardData(cards) {
    // save cards data to local storage
    localStorage.setItem('cards', JSON.stringify(cards));
    // reload window
    window.location.reload();

}


createCards();

// Event Listners
// 1. Even listner for next button
nextBtn.addEventListener('click', () => {
    // hide the current card and move the left
    cardElements[currentActiveCard].className = 'card left'
    // increment the current active card tracker to the next card
    currentActiveCard++;
    // chweck if last card
    if (currentActiveCard > cardElements.length - 1) {
        currentActiveCard = cardElements.length - 1;
    }

    // display the new card
    cardElements[currentActiveCard].className = 'card active'


    // update the current card number
    updateCurrentCardText();
})



// 2. Even listner for previous button
prevBtn.addEventListener('click', () => {
    // hide the current card and move the left
    cardElements[currentActiveCard].className = 'card right'
    // increment the current active card tracker to the next card
    currentActiveCard--;
    // chweck if last card
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    // display the new card
    cardElements[currentActiveCard].className = 'card active'


    // update the current card number
    updateCurrentCardText();
})



// 3. Create Event listner for the add new card button addCardbtn
addCardBtn.addEventListener('click', () => {
    addCardContainer.classList.add('show');
})


// 4. close the add new card form
closeCardBtn.addEventListener('click', () => {
    addCardContainer.classList.remove('show');
})

// 5. Event listner for creating a new card 
addNewCardBtn.addEventListener('click', () => {
    // get the user inputs from the text field
    const questionInput = question.value;
    const answerInput = answer.value;
    // check the make sure inputs are not null

    if (questionInput.trim() && answerInput.trim()) {
        // created new object using the user inout
        const newCard = { question: questionInput, answer: answerInput }
        // using the new card obect, create a card element using the createCard function
        createCard(newCard);


        // Reset form fiels
        question.value = '';
        answer.value = '';
        // hide form after submit 
        addCardContainer.classList.remove('show');

        // add the new card object to the cards data of the array
        cardsData.push(newCard);

        // save data to local storage and reload
        saveCardData(cardsData);
    }
})


// 6. Event listner to clear all cards
clearBtn.addEventListener('click', () => {
    // remove data from local storage
    localStorage.clear();
    // clear the card container of all contains
    cardContainer.innerHTML = '';
    // reload the window
    window.location.reload;
    //update the current card number
    currentCard = '';
})
