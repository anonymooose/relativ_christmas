$(function()
  {
    var img = document.createElement('img');
    img.setAttribute('src', 'relativ_holidaycard_2018_v1-01.png')
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
          $(filterimg).addClass("red");
        }else{
          $(filterimg).removeClass("red");
          $(filterimg).addClass("none");
        }
      }
});
