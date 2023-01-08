$(function () {
  createRandomNum();
  createRandomNum();
  bgc();
  $(document).on('keydown',function (e) {
    console.log(e.keyCode)
    switch (e.keyCode){
      case 37 : isOver(); moveLeft(); bgc() ; break;
      case 38 : isOver(); moveUp(); bgc() ; break;
      case 39 : isOver(); moveRight(); bgc() ; break;
      case 40 : isOver(); moveDown(); bgc() ; break;
    }
  });
  $('.restart').click(function () {
    restart();
  })
})