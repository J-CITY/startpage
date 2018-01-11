var wallpapers = [
    'img/wallpaper0.jpg',
    'img/wallpaper1.jpg',
    'img/wallpaper2.jpg',
    'img/wallpaper3.jpg',
    'img/wallpaper4.jpg',
    'img/wallpaper5.jpg',
];

function setWallpaper() {
    document.getElementById('background-image').style.background = 'url('+
        wallpapers[Math.floor(Math.random() * (wallpapers.length-1))]+') no-repeat';
}
