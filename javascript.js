$(function()
  {
    var video = document.createElement('video');
    video.setAttribute('class','videoPlayer');
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');

    var filter = document.createElement('div');
    document.body.appendChild(video);
});
