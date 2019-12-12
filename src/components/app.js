angular.module('video-player').component('app', {
  controller:function(){
    this.videos = window.exampleVideoData;
    this.currentvideo = window.exampleVideoData[0];
    this.url = ("https://www.youtube.com/embed/").concat(this.currentvideo.id.videoId);
    this.changevideo = (video)=>{
      this.currentvideo = video;
      this.url = ("https://www.youtube.com/embed/").concat(this.currentvideo.id.videoId);
    }
  },
  templateUrl: "src/templates/app.html"
});
