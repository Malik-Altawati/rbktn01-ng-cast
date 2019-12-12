angular.module('video-player')
.component('videoList', {
  // TODO
  bindings:{
    videos : '<',
    changevideo:'<',
    url : '<'
  },
  templateUrl: "src/templates/videoList.html"
});
