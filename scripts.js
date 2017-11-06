// Player object
var player
// Timer interval
var timer
// Video duration
var duration
// Tag for progress visualization
var progress_field = document.getElementById('progress');

// Load API
function onYouTubeIframeAPIReady() { 
    player = new YT.Player('player');
    player.addEventListener('onReady', 'onPlayerReady');
    player.addEventListener('onStateChange', 'onPlayerStateChange');
} 

// Player Ready Listener
function onPlayerReady() {
    console.log('Ready!');
}

// Player State Change Listener
function onPlayerStateChange(event) {
	if(event.data === YT.PlayerState.PLAYING) { 
        duration = player.getDuration();
	timer = setInterval(getProgress,1000);
    } else {
        // Clear timer if video is paused, ended
	clearInterval(timer);
    }
}

// Calculate and show progress 
function getProgress(){
    progress = Math.round(player.getCurrentTime() / duration * 100);
    progress_field.innerHTML = progress + "%";
    // More info? :)
    // video_id = player.getVideoUrl().replace("https://www.youtube.com/watch?v=", "");
}
