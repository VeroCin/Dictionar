const dictionary = [];

function saveWord() {
    const word = document.getElementById('wordInput').value.trim();
    if (word && !dictionary.includes(word)) {
        dictionary.push(word);
        document.getElementById('wordInput').value = ""; 
    } 
}

function searchWord() {
    const searchedWord = document.getElementById('searchInput').value.trim();
    const resultContainer = document.getElementById('resultContainer');
    if (dictionary.includes(searchedWord)) {
        alert(`The word "${searchedWord}" is in the dictionary.`);
    } else {
        alert(`The word "${searchedWord}" is NOT in the dictionary.`);
    }
    document.getElementById('searchInput').value = "";
}
