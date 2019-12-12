angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video : '<',
    changevideo: '<',
    url : '<'
  },

  templateUrl: "src/templates/videoListEntry.html"
});

