

var itemName = document.getElementsByTagName("img")[0].getAttribute("title");

/**
* function to initially write to the champion grid. Order is alphabetical
* */
function initWrite(){

  var champLines = document.getElementsByTagName("tr");
  var i;

  for(int i = 1; i < champLines.length; i++){
    var champLine = champLines[i];
    var champPic = document.getElementById(""+i+"a").getAttribute("src");
    var champName = document.getElementById(""+i+"a").getAttribute("title");
    
    document.getElementById(""+i+"b").innerHTML = getChampionWinRate( itemName, champName, 0 );
    document.getElementById(""+i+"c").innerHTML = getChampionWinRate( itemName, champName, 1 ):
    document.getElementById(""+i+"d").innerHTML = getChampionKDA( itemName, champName, 0 );
    document.getElementById(""+i+"e").innerHTML = getChampionKDA( itemName, champName, 1 );
  }
}

/**
* Function to reorder the champion grid by Name 
* @param order whether it should be ordered by normal or reverse alphabetic
* */
function orderByName(order){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){

    maxMin = document.getElementById(""+i+"a").innerHTML;

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"a").innerHTML > maxMin && order == 0 ){
        maxMin = document.getElementById(""+j+"a").innerHTML;
        line = j;
      }
      elseif( document.getElementById(""+j+"a").innerHTML < maxMin && order == 1 ){
        maxMin = document.getElementById(""+j+"a").innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    swap( i, line );
  }
}
/**
* Function to reorder the champion grid by Pre Win Rate
* @param order whether it should be ordered by highest or lowest win rate
* */
function orderByPreWin(order){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){

    maxMin = document.getElementById(""+i+"b");

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"b") > maxMin && order == 0 ){
        maxMin = document.getElementById(""+j+"b");
        line = j;
      }
      elseif( document.getElementById(""+j+"b") < maxMin && order == 1 ){
        maxMin = document.getElementById(""+j+"b");
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    swap( i, line );
  }
}

/**
* Function to reorder the champion grid by Post Win Rate
* @param order whether it should be ordered by highest or lowest win rate
* */
function orderByPostWin(order){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){

    maxMin = document.getElementById(""+i+"c");

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"c") > maxMin && order == 0 ){
        maxMin = document.getElementById(""+j+"c");
        line = j;
      }
      elseif( document.getElementById(""+j+"c") < maxMin && order == 1 ){
        maxMin = document.getElementById(""+j+"c");
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    swap( i, line );
  }
}


/**
* Function to reorder the champion grid by Pre KDA
* @param order whether it should be ordered by highest or lowest KDA
* */
function orderByPreKDA(order){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){

    maxMin = document.getElementById(""+i+"d");

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"d") > maxMin && order == 0 ){
        maxMin = document.getElementById(""+j+"d");
        line = j;
      }
      elseif( document.getElementById(""+j+"d") < maxMin && order == 1 ){
        maxMin = document.getElementById(""+j+"d");
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    swap( i, line );
  }
}

/**
* Function to reorder the champion grid by Post Win Rate
* @param order whether it should be ordered by highest or lowest KDA
* */
function orderByPostKDA(order){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){

    maxMin = document.getElementById(""+i+"e");

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"e") > maxMin && order == 0 ){
        maxMin = document.getElementById(""+j+"e");
        line = j;
      }
      elseif( document.getElementById(""+j+"e") < maxMin && order == 1 ){
        maxMin = document.getElementById(""+j+"e");
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    swap( i, line );
  }
}

/*
* Helper function to swap two lines
* @param i the first line to swap
* @param line the second line to swap
* */
function swap(i, line){
  var tempPic = document.getElementById(""+i+"a").getAttribute("src");
  var tempName = document.getElementById(""+i+"a").getAttribute("title");
  var tempPreWin = document.getElementById(""+i+"b").innerHTML;
  var tempPostWin = document.getElementById(""+i+"c").innerHTML;
  var tempPreKDA = document.getElementById(""+i+"d").innerHTML;
  var tempPostKDA = document.getElementById(""+i+"e").innerHTML;

  var newPic = document.getElementById(""+line+"a").getAttribute("src");
  var newName = document.getElementById(""+line+"a").getAttribute("title");
  var newPreWin = document.getElementById(""+line+"b").innerHTML;
  var newPostWin = document.getElementById(""+line+"c").innerHTML;
  var newPreKDA = document.getElementById(""+line+"d").innerHTML;
  var newPostKDA = document.getElementById(""+line+"e").innerHTML;

  document.getElementById(""+i+"a").setAttribute("src",newPic);
  document.getElementById(""+i+"a").setAttribute("title",newName);
  document.getElementById(""+i+"a").setAttribute("alt",newName);
  document.getElementById(""+i+"b").innerHTML = newPreWin;
  document.getElementById(""+i+"c").innerHTML = newPostWin;
  document.getElementById(""+i+"d").innerHTML = newPreKDA;
  document.getElementById(""+i+"e").innerHTML = newPostKDA;
  document.getElementById(""+i).innerHTML = newName;
   
  document.getElementById(""+line+"a").setAttribute("src",tempPic);
  document.getElementById(""+line+"a").setAttribute("title",tempName);
  document.getElementById(""+line+"a").setAttribute("alt",tempName);
  document.getElementById(""+line+"b").innerHTML = tempPreWin;
  document.getElementById(""+line+"c").innerHTML = tempPostWin;
  document.getElementById(""+line+"d").innerHTML = tempPreKDA;
  document.getElementById(""+line+"e").innerHTML = tempPostKDA;
  document.getElementById(""+line).innerHTML = tempName;
}


 

