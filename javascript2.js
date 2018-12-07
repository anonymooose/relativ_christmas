$(function()
  {
    var img = document.createElement('img');
    img.setAttribute('src', 'relativ_holidaycard_2018_v1-01.png')

    var filterimg = document.createElement('div');
    document.body.appendChild(img);
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
});
