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
    $(filter).addClass('red');

    filter.onclick = function()
      {
        if($(filter).hasClass("red")){
          $(filter).removeClass("red");
          $(filter).addClass("blue");
        }else if($(filter).hasClass("blue")){
          $(filter).removeClass("blue");
          $(filter).addClass("orange");
        }else if($(filter).hasClass("orange")){
          $(filter).removeClass("orange");
          $(filter).addClass("purple");
        } else{
          $(filter).removeClass("purple");
          $(filter).addClass("red");
        }
      }

});
