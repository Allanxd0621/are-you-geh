

function noPlay(){
    const noSound = document.getElementById('sikee');
    noSound.pause();
    noSound.currentTime = 0;
    noSound.play();
    

} 
   

document.getElementById('noBtn').onfocus = function(){
    noPlay();
}

function containerPlay(){
    const containerSound = document.getElementById('rusure');
    containerSound.pause();
    containerSound.currentTime = 0;
    containerSound.play();

}

document.getElementById('btnContainers').onmouseenter = function(){
    containerPlay();
}

