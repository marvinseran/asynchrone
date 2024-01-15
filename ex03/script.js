/*function getRandomQuote() {
    fetch("https://thatsthespir.it/api")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerHTML = '"' + data.quote + '" - ' + data.author;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById("quote").innerHTML = "Error fetching quote. Please try again.";
        });
}*/

async function getAuthorAge(authorName) {
    try {
        const agifyResponse = await fetch(`https://api.agify.io?name=${authorName}`);
        const agifyData = await agifyResponse.json();
        
        // Extracting the estimated age
        const age = agifyData.age;

        return age;
    } catch (error) {
        console.error('Error fetching age:', error);
        return null;
    }
}

async function getRandomQuote() {
    try {
        // Make a request to the Quotes serving website
        const response = await fetch("https://thatsthespir.it/api");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Update the quote on the webpage
        document.getElementById("quote").innerHTML = `"${data.quote}"`;

        // Get author's age from Agify API
        const authorAge = await getAuthorAge(data.author);

        // Display author's information
        const authorInfo = `Author: ${data.author}, Age: ${authorAge || 'Unknown'}`;
        document.getElementById("author-info").innerHTML = authorInfo;

        // Display author's photo
        const authorPhoto = document.getElementById("author-photo");
        authorPhoto.src = data.photo;
        authorPhoto.alt = `Photo of ${data.author}`;

    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById("quote").innerHTML = "Error fetching quote. Please try again.";
        document.getElementById("author-info").innerHTML = "";
        document.getElementById("author-photo").src = "";
    }
}