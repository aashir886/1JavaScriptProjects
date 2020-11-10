// Get all DOM ELements required
// HTML5 main Element for the grid
const main = document.getElementById('main');
// Slect box for change voices
const voiceSelect = document.getElementById('voices');
// toggle button display custome text input
const toggleBtn = document.getElementById('toggle');
// Button close the custom text div
const closeBtn = document.getElementById('close');
// Text area for custom text input
const customText = document.getElementById('text');
// button to read the custom text
const readBtn = document.getElementById('read');
// custom text div
const customTextDiv = document.getElementById('custom-text');








// Array for holding all images and text to be read
const data = [
    {
        image: './img/angery.jpeg',
        text: "I'm Angry"
    },
    {
        image: './img/drink.jpeg',
        text: "I'm Thirsty"
    },
    {
        image: './img/food.jpeg',
        text: "i'm Hungry"
    },
    {
        image: './img/grandma.jpeg',
        text: "I want to go to Grandma's"
    },
    {
        image: './img/happy.jpeg',
        text: "I'm Happy"
    },
    {
        image: './img/home.jpeg',
        text: "I Want to go Home"
    },
    {
        image: './img/hurt.jpeg',
        text: "I'm Hurt"
    },
    {
        image: './img/outside.jpeg',
        text: "I Want to go Outside"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/school.jpeg',
        text: "I' Want to go to Scholl"
    },
    {
        image: './img/tired.jpeg',
        text: "I'm Tired"
    }
]



// array for all webg speak API voice
let voicesBackup = [];


// Create a box for each obecjt in the data array
data.forEach(createBox);


// functions
// 1. function to create speech boxes
function createBox(imageObj) {
    console.log(imageObj);
    // Create empty div for the image to be added the main grid latter
    const box = document.createElement('div');


    // Get the image Url and text from the data array
    const { image, text } = imageObj;
    // Apply a CSS class the new div
    box.classList.add('box');


    // Add the image inside the box
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class= "imageInfo">${text}</p>
    `;
    // Add Event for speaking text
    box.addEventListener('click', () => {
        setMessage(text);
        speachText();

    })

    // Add the new box to the DOM
    main.appendChild(box);
}


// initialize speech sysnthesis
const message = new SpeechSynthesisUtterance();



// 2. function to get voices from web Speec API and put into the select box
function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }

    let voices = speechSynthesis.getVoices();
    voicesBackup = voices

    for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }   
}














// 3. set the textfor speechsysnthesis
function setMessage(text) {
    message.text = text;
}


// 4. to speech the text
function speachText() {
    speechSynthesis.speak(message);
}


// 5. function to set the new voice
 function setVoice(e) {
     console.log(e.target.value);
     message.voice = voicesBackup.find(voice => voice.name === e.target.value);
 }

// speechSynthesisInstance.onvoiceschanged = function() { '' };


// 6. event listner for custom text reader
readBtn.addEventListener('click', () => {
    setMessage(customText.value);
    speachText();
})


























// Execute populateVoiceList function
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}





// Event listners
// 1. toggle
toggleBtn.addEventListener('click', () => {
    customTextDiv.classList.toggle('show');
})


//2. close button in custom text div
closeBtn.addEventListener('click', () => {
    customTextDiv.classList.remove('show');
})


// 3. Event listner when changing voices
speechSynthesis.addEventListener('voicesChanged', populateVoiceList);
voiceSelect.addEventListener('change', setVoice);







// 4. Event listner 





