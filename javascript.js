function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
} else {
  alert('getUserMedia() is not supported by your browser');
}

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

    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {

        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      }
    }

    navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "environment"} })
    .then(function(stream) {
      var video = document.querySelector('video');

      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {

        video.src = window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });


/*      var constraints = { audio: false, video: { facingMode: "environment" } };

      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) { console.log(err.name + ": " + err.message); });*/

  /*  var constraints = { audio: false, video: { facingMode: "environment" } };
    navigator.getUserMedia(constraints, function(stream){
      video.srcObject = stream;

      video.onloadedmetadata = function(e){
        video.play();
      }
    },
      function(e){log(e.message);
    });*/
});
