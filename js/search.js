
var box = document.getElementById("search");

var selector = document.getElementById("searchEngine");

var searchMap = new Map();

searchMap.set('Google' , 'https://www.google.ru/search?q=');
searchMap.set('DDG'    , 'https://www.duckduckgo.com/');
searchMap.set('Wiki'   , 'https://ru.wikipedia.org/wiki/');
searchMap.set('Youtube', 'https://www.youtube.com/results?search_query=');

// search for text in text box
function search(e) {
  if (e.keyCode == 13) {
    for (let i = 0; i < selector.options.length; i++) {
      var option = selector.options[i];
      if(option.selected) {
        document.location.href = searchMap.get(option.value) + encodeURIComponent(box.value);
      }
    }
    return false;
  }
}

