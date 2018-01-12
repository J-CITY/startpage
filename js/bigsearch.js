var isBigSearch = false;

addEventListener("keydown", function(event) {
    if (event.keyCode == 113)
        bigSearch(113);
});

function bigSearch() {
    isBigSearch = !isBigSearch;
    let bg = document.getElementById('background-image');
    let bigSearch = document.getElementById('big-search');
    if (isBigSearch) {
        bg.style.zIndex = "900";
        bg.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5) inset";
        bigSearch.style.visibility = "visible";
        bigSearch.style.zIndex = "1000";
        bigSearch.focus();
    } else {
        bg.style.zIndex = "-1";
        bg.style.boxShadow = "0 0 0 0px rgba(0, 0, 0, 0.5) inset";
        bigSearch.style.visibility = "hidden";
        bigSearch.style.zIndex = "-2";
        bigSearch.value = '';
    }
}