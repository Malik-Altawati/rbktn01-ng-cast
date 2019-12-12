angular.module('video-player')

.component('videoPlayer', {
    bindings : {
        currentvideo : '<',
        url:'<'
    },
 templateUrl: "src/templates/videoPlayer.html"
});
