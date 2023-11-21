    function generateRandomAlphabet() {
      // Array to store the random alphabet characters
      const alphabetArray = [];

      // Alphabetical characters
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      // Generate a random array of all 26 alphabetical characters
      for (let i = 0; i < 26; i++) {
        const randomChar = alphabet[i];
        alphabetArray.push(randomChar);
      }

      // Assign numerical values to each character (limited to 3 digits)
      const alphabetWithValues = alphabetArray.map(char => ({
        character: char,
        value: Math.floor(Math.random() * 1000) + 1,
      }));

      // Display the first result
      displayResult([alphabetWithValues[0]]);

      // Set a timeout to reload the page after 15 seconds
      setTimeout(() => {
        location.reload();
      }, 15000); // 15 seconds in milliseconds
    }

    function displayResult(resultArray) {
      const resultContainer = document.getElementById('result');
      resultContainer.innerHTML = ''; // Clear previous results

      // Create a list item for the single result
      const listItem = document.createElement('li');
      listItem.textContent = `${resultArray[0].character}: ${resultArray[0].value}`;
      resultContainer.appendChild(listItem);
    }
