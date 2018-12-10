$(function()
  {
    var img = document.createElement('img');
    img.setAttribute('src', 'relativ_holidaycard_2018.png')
    img.setAttribute('class', 'holidaycard')

    var filterimg = document.createElement('div');
    document.body.appendChild(img);
    document.body.appendChild(filterimg);

    $(filterimg).addClass('filterimg');
    $(filterimg).addClass('none');

    filterimg.onclick = function()
      {
        if($(filterimg).hasClass("none")){
          $(filterimg).removeClass("none");
          $(filterimg).addClass("grey");
        }else if($(filterimg).hasClass("grey")){
          $(filterimg).removeClass("grey");
          $(filterimg).addClass("orange");
        }else if($(filterimg).hasClass("orange")){
          $(filterimg).removeClass("orange");
          $(filterimg).addClass("purple");
        } else{
          $(filterimg).removeClass("purple");
          $(filterimg).addClass("none");
        }
      }
});
