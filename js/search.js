var searchMap = new Map();

searchMap.set('Google' , 'https://www.google.ru/search?q=');
searchMap.set('DDG'    , 'https://www.duckduckgo.com/');
searchMap.set('Wiki'   , 'https://ru.wikipedia.org/wiki/');
searchMap.set('Youtube', 'https://www.youtube.com/results?search_query=');

searchMap.set('g' , 'https://www.google.ru/search?q=');
searchMap.set('ddg'    , 'https://www.duckduckgo.com/');
searchMap.set('w'   , 'https://ru.wikipedia.org/wiki/');
searchMap.set('yt', 'https://www.youtube.com/results?search_query=');
searchMap.set('r', 'https://www.reddit.com/r/');
//searchMap.set('wa:', 'https://www.reddit.com/r/');
searchMap.set('habr', 'https://habrahabr.ru/search/?q=');
searchMap.set('da', 'https://www.deviantart.com/?section=');
searchMap.set('lurk', 'http://lurkmore.to/index.php?search=');
searchMap.set('ms', 'https://myshows.me/search/?q=');
searchMap.set('rt', 'https://rutracker.org/forum/tracker.php?nm=');
searchMap.set('rtor', 'http://new-rutor.org/search/');

var commandSet = new Set();
commandSet.add('g');
commandSet.add('yt');
commandSet.add('ddg');
commandSet.add('r');
//commandSet.add('wa');
commandSet.add('w');
commandSet.add('da');
commandSet.add('lurk');
commandSet.add('ms');
commandSet.add('habr');
commandSet.add('rt');
commandSet.add('rtor');
// search for text in text box
function search(e) {
  if (e.keyCode == 13) {
    let box = document.getElementById('search');
    let selector = document.getElementById('searchEngine');
    let boxStr = box.value;

    let bigSearch = document.getElementById('big-search');
    if (bigSearch.value !== '') {
      boxStr = bigSearch.value;
    }

    let searchCommand = '';
    searchCommand = boxStr.substr(0, boxStr.indexOf(':')); 
    if (commandSet.has(searchCommand)) {
      let refactorCommand = boxStr.substr(boxStr.indexOf(':'));
      refactorCommand = refactorCommand.substr(1);
      while(refactorCommand[0] === ' ') {
        refactorCommand = refactorCommand.substr(1);
      }
      document.location.href = searchMap.get(searchCommand) + encodeURIComponent(refactorCommand);
      return;
    }

    for (let i = 0; i < selector.options.length; i++) {
      let option = selector.options[i];
      if(option.selected) {
        document.location.href = searchMap.get(option.value) + encodeURIComponent(boxStr);
      }
    }
    return false;
  }
}

