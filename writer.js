/**
This script writes to the grid of champions for each item
The item name is retrieved, then the list of champions is displayed alphabetically
Functions are defined which allow the list to be reordered
@author Jeremy Seiji Smith
*/

var itemName = document.getElementsByTagName("img")[0].getAttribute("title");
var alphaOrder = 1;
var preWinOrder = 0;
var postWinOrder = 0;
var prekdaOrder = 0;
var postkdaOrder = 0;

initWrite();

/*
* function to initially write to the champion grid. Order is alphabetical
* */
function initWrite(){
  var champLines = document.getElementsByTagName("tr");
  var i;

  for( i = 1; i < champLines.length; i++){
    var champLine = champLines[i];
    var champPic = document.getElementById(""+i+"a").getElementsByTagName("img")[0].getAttribute("src");
    var champName = document.getElementById(""+i+"a").getElementsByTagName("img")[0].getAttribute("title");
    
    var url = document.getElementById(""+i+"a").getElementsByTagName("a")[0].getAttribute("href");
    url = url + "#" + champName;
    url = url.replace(" ","_");
    document.getElementById(""+i+"a").getElementsByTagName("a")[0].setAttribute("href",url);
    document.getElementById(""+i+"a").getElementsByTagName("a")[1].setAttribute("href",url);

    document.getElementById(""+i+"b").innerHTML = getChampionWinRate( itemName, champName, 0 );
    document.getElementById(""+i+"c").innerHTML = getChampionWinRate( itemName, champName, 1 );
    document.getElementById(""+i+"d").innerHTML = getChampionKDA( itemName, champName, 0 );
    document.getElementById(""+i+"e").innerHTML = getChampionKDA( itemName, champName, 1 );
    
    if(document.getElementById(""+i+"b").innerHTML != "Unplayed")
      document.getElementById(""+i+"b").innerHTML = Number(getChampionWinRate( itemName, champName, 0 )).toFixed(3);
    if(document.getElementById(""+i+"c").innerHTML != "Unplayed")
      document.getElementById(""+i+"c").innerHTML = Number(getChampionWinRate( itemName, champName, 1 )).toFixed(3);
    if(document.getElementById(""+i+"d").innerHTML != "Unplayed")  
      document.getElementById(""+i+"d").innerHTML = Number(getChampionKDA( itemName, champName, 0 )).toFixed(3);
    if(document.getElementById(""+i+"e").innerHTML != "Unplayed")
      document.getElementById(""+i+"e").innerHTML = Number(getChampionKDA( itemName, champName, 1 )).toFixed(3);
  }
}
/**
 * Method to search the champion grid for a specific champion. Swaps with the first position if found
 * */
function search(){
  var str = document.getElementById("searchBar").value;
  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;
  for(i = 1; i < champLines.length; i++){
    for(j = i; j < champLines.length; j++){
      var champName = document.getElementById(""+j+"a").getElementsByTagName("img")[0].getAttribute("title");  
      if( champName.toLowerCase().search(str.toLowerCase()) > -1 ){
        console.log("Swapping "+champName);
        swap(j,i);
      }
    }
  }  
}

/**
* Function to reorder the champion grid by Name 
* */
function orderByName(){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){
    line = -1;
    maxMin = document.getElementById(""+i+"a").getElementsByTagName("a")[1].innerHTML;
    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      if( document.getElementById(""+j+"a").getElementsByTagName("a")[1].innerHTML < maxMin && alphaOrder == 0 ){
        maxMin = document.getElementById(""+j+"a").getElementsByTagName("a")[1].innerHTML;
        line = j;
      }
      else if( document.getElementById(""+j+"a").getElementsByTagName("a")[1].innerHTML > maxMin && alphaOrder == 1 ){
        maxMin = document.getElementById(""+j+"a").getElementsByTagName("a")[1].innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    if( line == -1 ){}
    else
      swap( i, line );
  }

  if( alphaOrder == 0 )
    alphaOrder = 1;
  else 
    alphaOrder = 0;
  preWinOrder = 0;
  postWinOrder = 0;
  prekdaOrder = 0;
  postkdaOrder = 0;
}
/**
* Function to reorder the champion grid by Pre Win Rate
* */
function orderByPreWin(){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){
    line = -1;
    maxMin = document.getElementById(""+i+"b").innerHTML;
    if( maxMin == "Unplayed" ) maxMin = -1;

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      var preWin = document.getElementById(""+j+"b").innerHTML;
      if( preWin == "Unplayed" ) preWin = -1;

      if( Number(preWin) > Number(maxMin) && preWinOrder == 0 ){
        maxMin = document.getElementById(""+j+"b").innerHTML;
        line = j;
      }
      else if(Number(preWin) < Number(maxMin) && preWinOrder == 1 ){
        maxMin = document.getElementById(""+j+"b").innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    if( line == -1 ){}
    else
      swap( i, line );
  }

  if( preWinOrder == 0 )
    preWinOrder = 1;
  else
    preWinOrder = 0;
  alphaOrder = 0;
  postWinOrder = 0;
  prekdaOrder = 0;
  postkdaOrder = 0;
  
}

/**
* Function to reorder the champion grid by Post Win Rate
* */
function orderByPostWin(){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){
    line = -1;
    maxMin = document.getElementById(""+i+"c").innerHTML;
    if( maxMin == "Unplayed" ) maxMin = -1;

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      var postWin = document.getElementById(""+j+"c").innerHTML;
      if( postWin == "Unplayed" ) postWin = -1;

      if( Number(postWin) > Number(maxMin) && postWinOrder == 0 ){
        maxMin = document.getElementById(""+j+"c").innerHTML;
        line = j;
      }
      else if( Number(postWin) < Number(maxMin) && postWinOrder == 1 ){
        maxMin = document.getElementById(""+j+"c").innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    if( line == -1 ){}
    else
      swap( i, line );
  }

  if( postWinOrder == 0 )
    postWinOrder = 1;
  else
    postWinOrder = 0;
  alphaOrder = 0;
  preWinOrder = 0;
  prekdaOrder = 0;
  postkdaOrder = 0;
}


/**
* Function to reorder the champion grid by Pre KDA
* */
function orderByPreKDA(){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){
    line = -1;
    maxMin = document.getElementById(""+i+"d").innerHTML;
    if( maxMin == "Unplayed" ) maxMin = -1;

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      var preKDA = document.getElementById(""+j+"d").innerHTML;
      if( preKDA == "Unplayed" ) preKDA = -1;

      if( Number(preKDA) > Number(maxMin) && prekdaOrder == 0 ){
        maxMin = document.getElementById(""+j+"d").innerHTML;
        line = j;
      }
      else if( Number(preKDA) < Number(maxMin) && prekdaOrder == 1 ){
        maxMin = document.getElementById(""+j+"d").innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    if( line == -1 ){}
    else
      swap( i, line );
  }

  if( prekdaOrder == 0 )
    prekdaOrder = 1;
  else
    prekdaOrder = 0;
  alphaOrder = 0;
  preWinOrder = 0;
  postWinOrder = 0;
  postkdaOrder = 0;
}

/**
* Function to reorder the champion grid by Post Win Rate
* */
function orderByPostKDA(){

  var champLines = document.getElementsByTagName("tr");
  var i;
  var j;    
  var maxMin;
  var line;

  for(i = 1; i < champLines.length; i++){
    line = -1;
    maxMin = document.getElementById(""+i+"e").innerHTML;
    if( maxMin == "Unplayed") maxMin = -1;

    //Loop through each line and find the max or min winrate. Keep track of line
    for(j = i; j < champLines.length; j++){
      var postKDA = document.getElementById(""+j+"e").innerHTML;
      if( postKDA == "Unplayed" ) postKDA = -1;

      if( Number(postKDA) > Number(maxMin) && postkdaOrder == 0 ){
        maxMin = document.getElementById(""+j+"e").innerHTML;
        line = j;
      }
      else if( Number(postKDA) < Number(maxMin) && postkdaOrder == 1 ){
        maxMin = document.getElementById(""+j+"e").innerHTML;
        line = j;
      }
    }
    //Swaps the current line with the next max or min, then continue iterating
    if( line == -1 ){}
    else
      swap( i, line );
  }

  if( postkdaOrder == 0 )
    postkdaOrder = 1;
  else
    postkdaOrder = 0;
  alphaOrder = 0;
  preWinOrder = 0;
  postWinOrder = 0;
  prekdaOrder = 0;
}

/*
* Helper function to swap two lines
* @param i the first line to swap
* @param line the second line to swap
* */
function swap(i, line){
  var image1 = document.getElementById(""+i+"a").getElementsByTagName("img")[0];
  var image2 = document.getElementById(""+line+"a").getElementsByTagName("img")[0];
  var imageTemp = document.getElementById(""+line+"a").getElementsByTagName("img")[0].getAttribute("src");

  var name1 = document.getElementById(""+i+"a").getElementsByTagName("a")[1].innerHTML;
  var name2 = document.getElementById(""+line+"a").getElementsByTagName("a")[1].innerHTML;
  var nameTemp = document.getElementById(""+line+"a").getElementsByTagName("a")[1].innerHTML;

  var URL1 = document.getElementById(""+i+"a").getElementsByTagName("a")[0];
  var URL2 = document.getElementById(""+line+"a").getElementsByTagName("a")[0];
  var URLTemp = document.getElementById(""+line+"a").getElementsByTagName("a")[0].getAttribute("href");
  var URL1b = document.getElementById(""+i+"a").getElementsByTagName("a")[1];
  var URL2b = document.getElementById(""+line+"a").getElementsByTagName("a")[1];
  var URLTempb = document.getElementById(""+line+"a").getElementsByTagName("a")[1].getAttribute("href");

  var preWin1 = document.getElementById(""+i+"b").innerHTML;
  var preWin2 = document.getElementById(""+line+"b").innerHTML;
  var preWinTemp = document.getElementById(""+line+"b").innerHTML;

  var postWin1 = document.getElementById(""+i+"c").innerHTML;
  var postWin2 = document.getElementById(""+line+"c").innerHTML;
  var postWinTemp = document.getElementById(""+line+"c").innerHTML;

  var preKDA1 = document.getElementById(""+i+"d").innerHTML;
  var preKDA2 = document.getElementById(""+line+"d").innerHTML;
  var preKDATemp = document.getElementById(""+line+"d").innerHTML;

  var postKDA1 = document.getElementById(""+i+"e").innerHTML;
  var postKDA2 = document.getElementById(""+line+"e").innerHTML;
  var postKDATemp = document.getElementById(""+line+"e").innerHTML;

  image2.src = image1.src;
  image1.src = imageTemp;
  image2.alt = name1;
  image1.alt = name2;
  image2.title = name1;
  image1.title = name2;


  name2 = name1;
  document.getElementById(""+line+"a").getElementsByTagName("a")[1].innerHTML = name2;
  document.getElementById(""+i+"a").getElementsByTagName("a")[1].innerHTML = nameTemp;

  URL2.href = URL1.href;
  URL1.href = URLTemp;
  URL2b.href = URL1b.href;
  URL1b.href = URLTempb;

  preWin2 = preWin1;
  document.getElementById(""+line+"b").innerHTML = preWin2; 
  document.getElementById(""+i+"b").innerHTML = preWinTemp; 

  postWin2 = postWin1;
  document.getElementById(""+line+"c").innerHTML = postWin2; 
  document.getElementById(""+i+"c").innerHTML = postWinTemp; 

  preKDA2 = preKDA1;
  document.getElementById(""+line+"d").innerHTML = preKDA2; 
  document.getElementById(""+i+"d").innerHTML = preKDATemp; 

  postKDA2 = postKDA1;
  document.getElementById(""+line+"e").innerHTML = postKDA2; 
  document.getElementById(""+i+"e").innerHTML = postKDATemp; 

}


 

