function init() {
    const video = document.getElementById('video'); 
    const range = document.getElementById('input-range');
    document.getElementById('play-btn').addEventListener('click', (e)=> {
       video.play();
    });
    document.getElementById('pause-btn').addEventListener('click', (e)=> {
        video.pause();
    });
    range.addEventListener('change', (e => {
        video.volume = e.target.value;
    }))
    document.getElementById('more').addEventListener('click', (e)=> {
        video.currentTime = video.currentTime + 10;
    });
    document.getElementById('less').addEventListener('click', (e)=> {
        video.currentTime = video.currentTime - 10;
    }); 
    video.addEventListener('timeupdate', (e) => {
    document.getElementById("h1").innerHTML = Math.floor(e.target.currentTime) + 's';
    });
}
window.onload = init();
