let dictionary = [];

function saveWord() {
    let word = document.getElementById('word').value.trim();
        if (!dictionary.includes(word)) {
        dictionary.push(word);
        document.getElementById('word').value = ""; 
        
    } 
}

function searchWord() {
    let searchedWord = document.getElementById('searchWord').value.trim();
    let result = document.getElementById('result');

    if (dictionary.includes(searchedWord)) {
         alert(`The word "${searchedWord}" is in the dictionary.`);
    } else {
        alert(`The word "${searchedWord}" is NOT in the dictionary.`);
    }

    document.getElementById('searchWord').value = "";
}
