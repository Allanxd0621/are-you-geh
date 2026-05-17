

function noPlay(){
    const noSound = document.getElementById('sikee');
    noSound.pause();
    noSound.currentTime = 0;
    noSound.play();
    

} 
   

document.getElementById('noBtn').onfocus = function(){
    noPlay();
}

document.getElementById('noBtn').onmouseenter = function(){
    noPlay();
}

function rusurePlay(){
    const rusure = document.getElementById('rusure');
    rusure.pause();
    rusure.currentTime = 0;
    rusure.play();

}

document.getElementById('yesBtn').onmouseenter = function(){
    rusurePlay();
}

document.getElementById('hellnahBtn').onmouseenter = function(){
    rusurePlay();
}

