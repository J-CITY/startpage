var colorMap = new Map();

colorMap.set('wallpaper-color' , 'background-color');
colorMap.set('bg-color'    , 'background-color');
colorMap.set('border-color'   , 'border-color');
colorMap.set('text-color', 'color');
colorMap.set('title-color', 'color');
colorMap.set('input-color', 'color');
colorMap.set('name-color', 'color');
colorMap.set('at-color', 'color');
colorMap.set('tilde-color', 'color');
colorMap.set('dollar-color', 'color');
colorMap.set('cd-color', 'color');
colorMap.set('tildeslash-color', 'color');

function updateElements(id, preference) {
    let elements = document.getElementsByClassName(id);
    for (let i in elements) {
        if (elements.hasOwnProperty(i)) {
            elements[i].style.setProperty(colorMap.get(id), preference);
        }
    }
}

function updateTextColor(id, preference, isFocus) {
    let css = '';
    if (isFocus) {
        css = 'a:hover{ color: ' + preference + ';}';
    } else {
        css = '.text-color{ color: ' + preference + ';}';
    }
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function setSettings(id) {
    if (id === 'secondscb') {
        let secondscb = document.getElementById(id);
        localStorage.setItem(id, secondscb.checked);
        return;
    }
    if (id === 'blurcb') {
        let blurcb = document.getElementById(id);
        localStorage.setItem(id, blurcb.checked);
        let blur = document.getElementById('background-image');
        if (blurcb.checked) {
            blur.style.filter = 'blur(5px)';
        } else {
            blur.style.filter = 'blur(0px)';
        }
        return;
    }
    if (id === 'wallpapercb') {
        let wallpapercb = document.getElementById(id);
        localStorage.setItem(id, wallpapercb.checked);
        let wallpaper = document.getElementById('background-image');
        if (wallpapercb.checked) {
            wallpaper.style.visibility = 'visible';
        } else {
            wallpaper.style.visibility = 'hidden';
        }
        return;
    }

    let color = document.getElementById(id).jscolor;
    let preference = '#' + color;
    localStorage.setItem(id, preference);

    if (id === 'title-color') {
        let weather = document.getElementById('weatherwidget');
        weather.setAttribute('data-textColor', preference);
        __weatherwidget_init();
    }

    if (id === 'focus-text-color') {
        updateTextColor(id, preference, true);
    } if (id === 'text-color') {
        updateTextColor(id, preference, false);
    } else {
        updateElements(id, preference);
    }
}

function getSettings(id) {
    if (localStorage.getItem(id)) {
        var preference = localStorage.getItem(id);
    } else {
        return;
    }

    if (id === 'nametext') {
        if (preference !== '') {
            let namet = document.getElementById('namespan');
            namet.innerHTML = preference;
        }
        return;
    }

    if (id === 'wallpapercb') {
        let wallpapercb = document.getElementById(id);
        wallpapercb.checked = preference === 'false' ? false : true;
        let wallpaper = document.getElementById('background-image');
        if (wallpapercb.checked) {
            wallpaper.style.visibility = 'visible';
        } else {
            wallpaper.style.visibility = 'hidden';
        }
        return;
    }

    if (id === 'secondscb') {
        let secondscb = document.getElementById(id);
        secondscb.checked = preference === 'false' ? false : true;
        return;
    }

    if (id === 'blurcb') {
        let blurcb = document.getElementById(id);
        blurcb.checked = preference === 'false' ? false : true;
        let blur = document.getElementById('background-image');
        if (blurcb.checked) {
            blur.style.filter = 'blur(5px)';
        } else {
            blur.style.filter = 'blur(0px)';
        }
        return;
    }

    if (id === 'title-color') {
        let weather = document.getElementById('weatherwidget');
        weather.setAttribute('data-textColor', preference);
        __weatherwidget_init();
    }

    if (id === 'focus-text-color') {
        updateTextColor(id, preference, true);
    } if (id === 'text-color') {
        updateTextColor(id, preference, false);
    } else {
        updateElements(id, preference);
    }

    let color = document.getElementById(id);
    color.value = preference.substring(1);
    document.getElementById(id).jscolor.fromString(preference.substring(1));
}

function updateName(e) {
    if (e.keyCode == 13) {
        let name = document.getElementById('nametext').value;
        if (name !== '') {
            localStorage.setItem('nametext', name);
            let namet = document.getElementById('namespan');
            namet.innerHTML = name;
        }
    }
    return false;
}

function getAllSettings() {
    getSettings('wallpaper-color');
    getSettings('bg-color');
    getSettings('border-color');
    getSettings('title-color');
    getSettings('input-color');
    getSettings('text-color');
    getSettings('focus-text-color');

    getSettings('name-color');
    getSettings('at-color');
    getSettings('tilde-color');
    getSettings('dollar-color');
    getSettings('cd-color');
    getSettings('tildeslash-color');

    getSettings('blurcb');
    getSettings('wallpapercb');
    getSettings('secondscb');

    getSettings('nametext');
}

function clearSettings() {
    localStorage.removeItem('wallpaper-color');
    localStorage.removeItem('bg-color');
    localStorage.removeItem('border-color');
    localStorage.removeItem('title-color');
    localStorage.removeItem('input-color');
    localStorage.removeItem('text-color');
    localStorage.removeItem('focus-text-color');

    localStorage.removeItem('name-color');
    localStorage.removeItem('at-color');
    localStorage.removeItem('tilde-color');
    localStorage.removeItem('dollar-color');
    localStorage.removeItem('cd-color');
    localStorage.removeItem('tildeslash-color');

    localStorage.removeItem('blurcb');
    localStorage.removeItem('wallpapercb');
    localStorage.removeItem('secondscb');
    localStorage.removeItem('nametext');
    location.reload();
    return false;
}