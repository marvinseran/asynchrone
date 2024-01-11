
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

        const name = nameInput.value.trim();
        const country = countrySelect.value;

        if (name !== '') {
            const requestDiv = document.createElement('div');

            fetch(`https://api.agify.io?name=${name}&country_id=${country}`)
                .then(response => response.json())
                .then(data => {
                    requestDiv.innerHTML = `<strong>${name}</strong> est ajouté depuis ce pays: ${country}`;
                    resultContainer.appendChild(requestDiv);

                    previousResults.push(requestDiv.innerHTML);
                    localStorage.setItem('previousResults', JSON.stringify(previousResults));

                    nameInput.value = '';
                })
        }
    });
});