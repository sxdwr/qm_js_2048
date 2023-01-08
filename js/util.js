let arr = [[],[],[],[]];
let index = 0;
let score = 0;
let divs = $('.box div');
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    arr[i][j] = divs[index++];
  }
}
let bestScore = localStorage.getItem('bestScore');
$('.best_score').text(bestScore);
function bgc() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let str = '#CDC1B4';
        switch($(arr[i][j]).text()){
          case '2' :
            str ='#eee4da';
            break;
          case '4':
            str = '#EDE0C8';
            break;
          case '8':
            str = '#F2B179';
            break;
          case '16':
            str = '#F59563';
            break;
          case '32':
            str = '#F67C5F';
            break;
          case '64':
            str = '#F65E3B';
            break;
          case '128':
            str = '#EDCF72';
            break;
          case '256':
            str = '#EDCC61';
            break;
          case '512':
            str = '#EDC850';
            break;
          case '1024':
            str = 'yellowgreen';
            break;
          case '2048':
            str = 'purple';
            break;
        }
        $(arr[i][j]).css('backgroundColor',str);
        if ($(arr[i][j]).text() > 4) $(arr[i][j]).css('color','#fff');
      }
    }
  }
function createRandomNum() {
    let a = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if ($(arr[i][j]).text() === '') {
          a.push(arr[i][j]);
        }
      }
    }
    let pos = Math.floor(Math.random() * a.length);
    let val = Math.random() > 0.4 ? 2 : 4;
    $(a[pos]).text(val);
  }
function restart() {
  $('.over').hide();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      $(arr[i][j]).text('') ;
    }
  }
  score = 0;
  changeScore();
  createRandomNum();
  createRandomNum();
  bgc();
}

function changeScore() {
  $('.score').text(score);
  if (score > bestScore){
    bestScore = score;
    localStorage.setItem('bestScore',bestScore);
    $('.best_score').text(bestScore);
  }
}
function isOver() {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if ($(arr[i][j]).text() === ''){
          flag = false;
          break;
        }
      }
    }
    if (flag){
      let bool = true;
      for(let i = 0;i < arr.length-1 ;i++) {
        for (let j = 0; j < arr.length - 1; j++) {
          if ($(arr[i][j]).text() === $(arr[i][j + 1]).text() ||
              $(arr[i][j]).text() === $(arr[i + 1][j]).text() ||
              $(arr[i + 1][j]).text() === $(arr[i + 1][j + 1]).text() ||
              $(arr[i][j + 1]).text() === $(arr[i + 1][j + 1]).text()) {
            bool = false;
          }
        }
        if (bool){
          $('.over').show();
        }
      }
    }else{
      createRandomNum();
    }


}

function moveLeft() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j > 0 && $(arr[i][j]).text() !== '' &&
          $(arr[i][j - 1]).text() === '' ){
        $(arr[i][j - 1]).text($(arr[i][j]).text());
        $(arr[i][j]).text('');
        moveLeft();
      }
      else if (j > 0 && $(arr[i][j]).text() !== ''
        && $(arr[i][j]).text() === $(arr[i][j - 1]).text()){
        score += 10;
        $(arr[i][j - 1]).text($(arr[i][j]).text() * 2);
        $(arr[i][j]).text('');
        changeScore();
      }
    }
  }
}
function moveUp() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i > 0 && $(arr[i][j]).text() !== '' &&
          $(arr[i - 1][j]).text() === '' ){
        $(arr[i - 1][j]).text($(arr[i][j]).text());
        $(arr[i][j]).text('');
        moveUp();
      }
      else if (i > 0 && $(arr[i][j]).text() !== ''
          && $(arr[i][j]).text() === $(arr[i - 1][j]).text()){
        score += 10;
        $(arr[i - 1][j]).text($(arr[i][j]).text() * 2);
        $(arr[i][j]).text('');
        changeScore();
      }
    }
  }
}
function moveRight() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if ($(arr[i][j]).text() !== '' &&
          $(arr[i][j + 1]).text() === '' ){
        $(arr[i][j + 1]).text($(arr[i][j]).text());
        $(arr[i][j]).text('');
        moveRight();
      }
      else if ($(arr[i][j]).text() !== ''
          && $(arr[i][j]).text() === $(arr[i][j + 1]).text()){
        score += 10;
        $(arr[i][j + 1]).text($(arr[i][j]).text() * 2);
        $(arr[i][j]).text('');
        changeScore();
      }
    }
  }
}
function moveDown() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if ($(arr[i][j]).text() !== '' &&
          $(arr[i + 1][j]).text() === '' ){
        $(arr[i + 1][j]).text($(arr[i][j]).text());
        $(arr[i][j]).text('');
        moveDown();
      }
      else if ($(arr[i][j]).text() !== ''
          && $(arr[i][j]).text() === $(arr[i + 1][j]).text()){
        score += 10;
        $(arr[i + 1][j]).text($(arr[i][j]).text() * 2);
        $(arr[i][j]).text('');
        changeScore();
      }
    }
  }
}