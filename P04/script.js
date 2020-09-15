//Getting Element from DOM
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');

// Fecth Exchange rate from 3rd party API  and update DOM
//https://www.exchangerate-api.com/
function calculate() {
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/fb751910517b2821c6b1f4b8/latest/${currencyOneCode}`)
        .then( res => res.json() )
        .then( data => {
            // Get the exchange rate from API data

            const exchangeRate = data.conversion_rates[currencyTwoCode];
            

            // Display the conversion Rates 
            rate.innerText =`1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;

            // Apply Conversion Rate and update Amount of currency
            currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);

        });
}

// Flip function for the flip button to reverse currency exchange 
function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
};

// EventListners 
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);




calculate()