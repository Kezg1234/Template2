const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

// let apiQuotes = [];

// Show loading icon/function
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading icon/function
function complete() {
   quoteContainer.hidden = false;
   loader.hidden = true; 
}

// Show new quote
function newQuote() {
    // Load function 
    loading();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes [Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check quote length to determine CSS styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote and hide loading icon
    quoteText.textContent = quote.text;
    complete();
}

// API not working 
// // Get quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//       const response = await fecth (apiUrl);
//       apiQuotes = await response.json();
//       newQuote();
//     } catch (error) {
//         // Catch Error Here 
//     }
// }

// // On load 
// getQuotes();

// Tweet a quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners 
twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);

// On load 
newQuote();
