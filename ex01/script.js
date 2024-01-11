document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('JsonButton').addEventListener('click', function() {
        fetch('text.json')
            .then(response => response.json())
            .then(data => {
                if (data && data.contenu && Array.isArray(data.contenu)) {
                    const rules = data.contenu;
                    const rulesList = document.getElementById('jsonlist');

                    rulesList.innerHTML = '';

                    rules.forEach(rule => {
                        const listItem = document.createElement('li');
                        listItem.textContent = rule;
                        rulesList.appendChild(listItem);
                    });
                } 
            })
    });
});