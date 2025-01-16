var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'AzK6NFoBPXs',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'AzK6NFoBPXs',
        },
        events: {
            onReady: function(event){
                event.target.mute()
            }
        }
    });
}