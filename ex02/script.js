document.addEventListener('DOMContentLoaded', function () {

    const fetchButton = document.getElementById('FetchButton');
    const nameInput = document.getElementById('nameInput');
    const resultContainer = document.getElementById('resultcontainer');

    const previousResults = JSON.parse(localStorage.getItem('previousResults')) || [];

    previousResults.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = result;
        resultContainer.appendChild(resultDiv);
    });

    fetchButton.addEventListener('click', function () {

        const word = nameInput.value.trim();
        const country = countrySelect.value;
        

        if (word !== '') {
            const requestDiv = document.createElement('div');

            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(response => response.json())
                .then(data => {
                    requestDiv.innerHTML = `<strong>${word}</strong> est ajouté depuis ce pays: ${country} </br> Définition : ${data[0].meanings[0].definitions[0].definition}`;
                    resultContainer.appendChild(requestDiv);

                    previousResults.push(requestDiv.innerHTML);
                    localStorage.setItem('previousResults', JSON.stringify(previousResults));

                    nameInput.value = '';
                })
        }
    });
});