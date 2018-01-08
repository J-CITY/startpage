var wallpapers = [
    'img/wallpaper0.jpg',
    'img/wallpaper1.jpg',
    'img/wallpaper2.jpg',
    'img/wallpaper3.jpg',
    'img/wallpaper4.jpg',
    'img/wallpaper5.jpg',
];

// search for text in text box
function setWallpaper() {
    //document.body.style.background = 'filter(url('+
    //    wallpapers[Math.floor(Math.random() * (wallpapers.length-1))]+'), blur(5px)) no-repeat';
    document.body.style.background = 'url('+
        wallpapers[Math.floor(Math.random() * (wallpapers.length-1))]+') no-repeat';
    //document.body.style.backdropFilter = 'blur(5px)';
    //document.body.style.zIndex = '-1';
}
