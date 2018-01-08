function storeUsernote() {
    let note = document.getElementById('note').innerHTML;
    localStorage.setItem('usernote',note);
}

function getUsernote() {
    if (localStorage.getItem('usernote')) {
      var note = localStorage.getItem('usernote');
    } else {
      var note = 'Write your note here';
    }
    document.getElementById('note').innerHTML = note;
}

function clearLocal() {
    clear: localStorage.clear();
    return false;
}