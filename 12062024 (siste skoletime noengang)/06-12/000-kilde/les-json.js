<script>
        // Open and read './goosa.json' from the local directory
        async function fetchJsonFile(filePath) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return await response.json();
            } catch (error) {
                console.error('Error fetching the JSON file:', error);
            }
        }

        // Define object tabellEl as const and assign it using getElementsByClassName
        const tabellEl = document.getElementsByClassName('mydata')[0];
        const tbodyEl = tabellEl.querySelector('tbody');

        // Function for reading ID counting integers from startID to including endID
        // from table remove all rows and add one by one using ID above as key
        async function updateTable(startID, endID) {
            const data = await fetchJsonFile('./goosa.json');
            if (!data || !data.rows) return;

            // Clear existing rows in tbody
            tbodyEl.innerHTML = '';

            // Add new rows based on ID range
            for (let i = startID - 1; i < endID; i++) {
                if (data.rows[i]) {
                    const row = document.createElement('tr');
                    const cellFN = document.createElement('td');
                    const cellLN = document.createElement('td');
                    const cellAge = document.createElement('td');

                    cellFN.textContent = data.rows[i].FN;
                    cellLN.textContent = data.rows[i].LN;
                    cellAge.textContent = data.rows[i].age;

                    row.appendChild(cellFN);
                    row.appendChild(cellLN);
                    row.appendChild(cellAge);
                    tbodyEl.appendChild(row);
                }
            }
        }

        // If tabellEl exists, run the above function with parameters 1 and 3
        if (tabellEl) {
            updateTable(1, 3);
        }
    </script>