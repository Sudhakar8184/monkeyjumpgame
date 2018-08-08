var row;
var col;
var a = new Array(8);
var k = 0;
for (var i = 0; i < 10; i++) {
  a[i] = new Array();
  let block = document.createElement('tr');
  block.setAttribute("id", `tr${i}`)
  let head = document.getElementById('tbody');
  head.appendChild(block);
  for (var j = 0; j < 16; j++) {
    let block = document.createElement('td');
    block.setAttribute("id", `td${i}${j}`);
    var setitem1 = 'white';
    block.setAttribute("style", `width: 40px;height: 40px;`)
    block.setAttribute("value", `${setitem1}`)
    block.innerHTML='';
    let head = document.getElementById(`tr${i}`);
    head.appendChild(block);
  }
}

function setitem() {
  var ch = Math.floor(Math.random() * 7) + 1;
  var item = ``;
  switch (ch) {
    case 1:
      item = '&#127822;';//appple
      break;
    case 2:
      item = '&#127815;';//grapes
      break;
    case 3:
      item = '&#127821;';//pineaple
      break;
   case 4:
      item = '&#127820;';//banana
      break;
    case 5:
      item = '&#127827;';//stawberry
      break;
    case 6:
      item = '&#127826;';//peach
      break;
    case 7:
      item = '&#129430;';//T-rex
      break;
  }
  return item
}
document.getElementById('td98').setAttribute('value','&#128018;')
document.getElementById('td98').innerHTML='&#128018;';
var row1,col1;
function getrowcol(){
for(var i=0;i<10;i++){
  for(var j=0;j<16;j++){
    var data = document.getElementById(`td${i}${j}`).getAttribute('value')
    if(data == '&#128018;'){
       row1=i;
       col1=j;
    }
  }
}
}
const buttons = document.getElementsByTagName('p');
const buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i += 1) {
  buttons[i].addEventListener('click', function () {
    var value = this.id;
    getrowcol()
    moveicon(value)
  
  })
}

function moveicon(value){
  switch (value) {
    case 'top':
    case 38:
    if(row1 >= 1){
    var data =  document.getElementById(`td${row1-1}${col1}`).getAttribute('value')
    scorefun(data)
    document.getElementById(`td${row1-1}${col1}`).setAttribute('value','&#128018;')
    document.getElementById(`td${row1-1}${col1}`).innerHTML='&#128018;';
    document.getElementById(`td${row1}${col1}`).setAttribute('value','white')
    document.getElementById(`td${row1}${col1}`).innerHTML='';
    }
      break;
    case 'left':
    case 37:
   if(col1 >= 1){
   var data =  document.getElementById(`td${row1}${col1-1}`).getAttribute('value')
   if(data != 'white'){
    scorefun(data)
   }
    document.getElementById(`td${row1}${col1-1}`).setAttribute('value','&#128018;')
    document.getElementById(`td${row1}${col1-1}`).innerHTML='&#128018;';
    document.getElementById(`td${row1}${col1}`).setAttribute('value','white')
    document.getElementById(`td${row1}${col1}`).innerHTML='';
  }
      break;
    case 'right':
    case 39:
    if(col1 < 15){
    var data =  document.getElementById(`td${row1}${col1+1}`).getAttribute('value')
    if(data != 'white'){
     scorefun(data)
    }
    document.getElementById(`td${row1}${col1+1}`).setAttribute('value','&#128018;')
    document.getElementById(`td${row1}${col1+1}`).innerHTML='&#128018;';
    document.getElementById(`td${row1}${col1}`).setAttribute('value','white')
    document.getElementById(`td${row1}${col1}`).innerHTML='';
  }
      break;
    case 'down':
    case 40:
    if(row1 < 9){
    var data =  document.getElementById(`td${row1+1}${col1}`).getAttribute('value')
   if(data != 'white'){
    scorefun(data)
   }
    document.getElementById(`td${row1+1}${col1}`).setAttribute('value','&#128018;')
    document.getElementById(`td${row1+1}${col1}`).innerHTML='&#128018;';
    document.getElementById(`td${row1}${col1}`).setAttribute('value','white')
    document.getElementById(`td${row1}${col1}`).innerHTML='';
  }
      break;
  }
 
}
 var score = 0;
function scorefun(value){
  switch (value) {
    case '&#127822;'://apple
       score = score+10;
      break;
    case '&#127815;'://grapes
      score = score+5;
      break;
    case '&#127821;'://pineapple
       score = score+20;
      break;
    case '&#127820;'://banana
       score = score+2;
      break;
    case '&#127827;'://stawbery
      score = score+15;
      break;
    case '&#127826;'://peach
      score = score+4;
      break;
    case '&#129430;'://T-rex
    alert(`you out from the game and your score is ${score}`)
       location.reload();
      break;
  }
  document.getElementById('scoreleft').innerHTML=score;
}

document.onkeydown = function(e) {
  getrowcol()
  moveicon(e.keyCode)
  console.log("sdfghjfghj")
};
function flow(){
  setInterval(()=>{
  for(var i=0;i<16;i++){
    // console.log("outside",i)  
  if (!emptyvalue(i,i,10)) {
    
    if(flow1()){
      shiftitems(col, row)
    }
    return;
  }
  // console.log(col,row)
  shiftitems(col, row)
  }
},1500)
}
function flow1(){
  for (row = 0; row <=16; row++) {
    for (col = 0; col < 10; col++) {
      if(col == 9){
        var data = document.getElementById(`td${col}${row}`).getAttribute('value')  
        if (data == '&#129430;') {
          document.getElementById(`td${col}${row}`).setAttribute('value','white')
          document.getElementById(`td${col}${row}`).innerHTML='';
        }
      }
      var data = document.getElementById(`td${col}${row}`).getAttribute('value')  
      if (data == 'white') {
          row =row;
          col= col;
        // console.log("inside",data)
        return true;
      }
    }
  }
  }
function emptyvalue(a,b,c) {
  // console.log(a,b,c)
  for (row = a; row <= b; row++) {
    for (col = 0; col < c; col++) {

      var data = document.getElementById(`td${col}${row}`).getAttribute('value')  
      if (data == 'white') {
          row =row;
          col= col;
        // console.log("inside",data)
        return true;
      }
    }
  }
  return false;
}

function shiftitems(newrow, newcol) {
  if (newrow >= 1) {
    for (var row = newrow - 1; row >= 0; row--) {
      if(row > 0 ||col < 16){
      if (row >= 1) {
        var data = document.getElementById(`td${row}${newcol}`).getAttribute('value')
        // console.log("new", row, col, data)
        document.getElementById(`td${row + 1}${newcol}`).setAttribute("value", `${data}`)
        document.getElementById(`td${row + 1}${newcol}`).innerHTML=data;
        document.getElementById(`td${row}${newcol}`).setAttribute("value", `white`)
        document.getElementById(`td${row}${newcol}`).innerHTML='';
      } else {
        var data = document.getElementById(`td${row}${newcol}`).getAttribute('value')
        // console.log("new", row, col, data)
        document.getElementById(`td${row + 1}${newcol}`).setAttribute("value", `${data}`)
        document.getElementById(`td${row + 1}${newcol}`).innerHTML=data;
        var setitem1 = setitem()
        document.getElementById(`td${row}${newcol}`).setAttribute("value", `${setitem1}`)
        document.getElementById(`td${row}${newcol}`).innerHTML=setitem1;
      }
    }
    }
  } else {
    var setitem1 = setitem()
    document.getElementById(`td${newrow}${newcol}`).setAttribute("value", `${setitem1}`)
    document.getElementById(`td${newrow}${newcol}`).innerHTML=setitem1;
  }
}