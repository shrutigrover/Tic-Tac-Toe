$(document).ready(function(){
  var human;
  var computer;
  $('.board').hide();
  $('.result').hide();
  $('.selection').click(function(){
    human = $(this).text();    
    if(human == 'X'){
      computer = 'O';
    }else{
      computer = "X";
    }
  
    $('.board').show();
    $('.chose').hide();
  });
  var click = function() {
    $('.block').click(function(){
      if( $(this).text() == ""){
         $(this).text(human);
      var win = checkWin(human);
      $('.block').unbind();
      setTimeout(function() {
              click();
          }, 2000);
      if(win){
        console.log('win');
         $('.result').show();
         $('.win').show();
         $('.board').hide();
      }else{ 
        computerChance();
      }     
     }
  });
  }
  click();
  
  function computerChance(){
    var emptyarr = checkEmpty();
    if(emptyarr.length == 0){
       $('.result').show();
       $('.draw').show();
       $('.board').hide();
    }else{
      setTimeout(function(){ var rand = emptyarr[Math.floor(Math.random()*emptyarr.length)];
      $("#"+rand).html(computer); 
      setTimeout(function(){ var comp = checkWin(computer);
      if(comp){
       $('.result').show();
       $('.lose').show();
       $('.board').hide();
      }
                           },2000);
   }, 2000);
      
    }
  }
  
  function checkEmpty(){
    var emptyspaces = [];
    for(var i = 1 ; i <= 9; i++){
      if($('#'+i).html() == ''){
        emptyspaces.push(i);
      }
    }
    return emptyspaces;
  }
  
});



function checkWin(player){
  var one = $("#1").html();
  var two = $("#2").html();
  var three = $("#3").html();
  var four = $("#4").html();
  var five = $("#5").html();
  var six = $("#6").html();
  var seven = $("#7").html();
  var eight = $("#8").html();
  var nine = $("#9").html();
  console.log(one + '    ' + two + '    '+ three);
  if( (one != '' && one==two && one==three) || (one!= '' && one == five && one==nine) || (one!= '' && one==four && one == seven) || (two!= '' && two == five && two==eight) || (three!= '' && three == five && three == seven) || (three!= '' && three == six && three == nine) || (four!= '' && four == five && four == six) || (seven != '' && seven == eight && seven == nine)){
return true;
  }else{
    return false;
  }
}

