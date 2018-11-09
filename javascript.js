$(function()
  {
    var video = document.createElement('video');
    video.setAttribute('class','videoPlayer');
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('playsinline', '');

    var filter = document.createElement('div');
    document.body.appendChild(video);
    document.body.appendChild(filter);

    $(filter).addClass('filter');
    $(filter).addClass('yellow');

    filter.onclick = function()
      {
        if($(filter).hasClass("yellow")){
          $(filter).removeClass("yellow");
          $(filter).addClass("grey");
        }else if($(filter).hasClass("grey")){
          $(filter).removeClass("grey");
          $(filter).addClass("orange");
        }else if($(filter).hasClass("orange")){
          $(filter).removeClass("orange");
          $(filter).addClass("purple");
        } else{
          $(filter).removeClass("purple");
          $(filter).addClass("yellow");
        }
      }

    var constraints = { audio: false, video: { facingMode: "environment" } };
    navigator.getUserMedia(constraints, function(stream){
      video.srcObject = stream;

      video.onloadedmetadata = function(e){
        video.play();
      }
    },
      function(e){log(e.message);
    });
});
