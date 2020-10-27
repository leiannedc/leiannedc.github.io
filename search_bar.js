
function find_text() {
    searchString = document.getElementById('search_text').value;
    window.find(searchString);
    console.log("String \x22" + searchString + "\x22 found? " + window.find(searchString));
}


document.getElementById('search_text').addEventListener('keydown', function(k){
    if(k.keyCode == 13) return false;
});