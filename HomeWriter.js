/**
 * This script fills out the bottom of the home page, finding the best and worst item of the
 * game mode. Items are selected by determining the total increase/decrease they have for every champion that
 * purchased the item
 * */

findBestItem();
findWorstItem();

/**
 * Script to find the best item and place it on the page
 * */
function findBestItem(){
  var currBest = "";
  var currBestScore = 0;
  var win;
  var kda;
  var numChamps = 0;
  var winDiff = 0;
  var kdaDiff = 0;
  var winDiffStore = 0;
  var kdaDiffStore = 0;

  //Loop through every item
  for( var item in post ){
    if( post.hasOwnProperty(item) ){

      //Loop through each champion that purchased the item. Get rid of "false" champions
      for( var champion in post[item] ){
        if( post[item].hasOwnProperty(champion) ){
          if( champion == "Win Rate" || champion == "Pick Rate")
            continue;
            
          //Determine WinRate and KDA for each champion. If not played enough, skip this champion  
          win = getDifference( 1, 0, 0, item, champion );
          kda = getDifference( 0, 0, 1, item, champion );
          if(win == "Unplayed" || kda == "Unplayed")
            continue;
        
          winDiff += win;
          kdaDiff += kda;
          numChamps++;
        }
      }
      //Find the maximum score based on Win Rate and KDA
      if( winDiff + kdaDiff > currBestScore ){
        currBest = item;
        currBestScore = winDiff + kdaDiff;
        winDiffStore = winDiff;
        kdaDiffStore = kdaDiff;
        bestItemNumChamps = numChamps;
      }
      winDiff = 0;
      kdaDiff = 0;
      numChamps = 0;
    }
  }
  //Average the stats and place on the page
  winDiffStore /= bestItemNumChamps;
  kdaDiffStore /= bestItemNumChamps;
  document.getElementById("increaseWinRate").innerHTML = Number(winDiffStore).toFixed(3);
  document.getElementById("increaseKDA").innerHTML = Number(kdaDiffStore).toFixed(3);
  document.getElementById("bestItemPic").src = ""; 
  document.getElementById("bestItemPic").innerHTML = currBest;
  document.getElementById("bestItemName").innerHTML = currBest;

  var itemId = 0;
  if(currBest == "Dead Man's Plate") itemId = 3742;
  else if(currBest == "Flesheater") itemId = 3924;
  else if(currBest == "Globe of Trust") itemId = 3840;
  else if(currBest == "Martyr's Gambit") itemId = 3911;
  else if(currBest == "Mirage Blade") itemId = 3150;
  else if(currBest == "Netherstride Grimoire") itemId = 3431;
  else if(currBest == "Pox Arcana") itemId = 3434;
  else if(currBest == "Puppeteer") itemId = 3745;
  else if(currBest == "Rite of Ruin") itemId = 3430;
  else if(currBest == "Staff of Flowing Water") itemId = 3744;
  else if(currBest == "Trickster's Glass") itemId = 3829;
  else if(currBest == "Typhoon Claws") itemId = 3652;
  
  document.getElementById("bestItemPic").src = "http://ddragon.leagueoflegends.com/cdn/5.15.1/img/item/" + itemId + ".png";
}

function findWorstItem(){
  var currWorst = "";
  var currWorstScore = 0;
  var win;
  var kda;
  var numChamps = 0;
  var winDiff = 0;
  var kdaDiff = 0;
  var winDiffStore = 0;
  var kdaDiffStore = 0;

  for( var item in post ){
    if( post.hasOwnProperty(item) ){

      for( var champion in post[item] ){
        if( post[item].hasOwnProperty(champion) ){
          if( champion == "Win Rate" || champion == "Pick Rate")
            continue;
          win = getDifference( 1, 0, 0, item, champion );
          kda = getDifference( 0, 0, 1, item, champion );
          if(win == "Unplayed" || kda == "Unplayed")
            continue;
        
          winDiff += win;
          kdaDiff += kda;
          numChamps++;
        }
      }

      if( winDiff + kdaDiff < currWorstScore ){
        currWorst = item;
        currWorstScore = winDiff + kdaDiff;
        winDiffStore = winDiff;
        kdaDiffStore = kdaDiff;
        worstItemNumChamps = numChamps;
      }
      winDiff = 0;
      kdaDiff = 0;
      numChamps = 0;
    }
  }
  winDiffStore /= worstItemNumChamps;
  kdaDiffStore /= worstItemNumChamps;
  document.getElementById("decreaseWinRate").innerHTML = Number(winDiffStore).toFixed(3);
  document.getElementById("decreaseKDA").innerHTML = Number(kdaDiffStore).toFixed(3);
  document.getElementById("worstItemPic").src = ""; 
  document.getElementById("worstItemPic").innerHTML = currWorst;
  document.getElementById("worstItemName").innerHTML = currWorst;

  var itemId = 0;
  if(currWorst == "Dead Man's Plate") itemId = 3742;
  else if(currWorst == "Flesheater") itemId = 3924;
  else if(currWorst == "Globe of Trust") itemId = 3840;
  else if(currWorst == "Martyr's Gambit") itemId = 3911;
  else if(currWorst == "Mirage Blade") itemId = 3150;
  else if(currWorst == "Netherstride Grimoire") itemId = 3431;
  else if(currWorst == "Pox Arcana") itemId = 3434;
  else if(currWorst == "Puppeteer") itemId = 3745;
  else if(currWorst == "Rite of Ruin") itemId = 3430;
  else if(currWorst == "Staff of Flowing Water") itemId = 3744;
  else if(currWorst == "Trickster's Glass") itemId = 3829;
  else if(currWorst == "Typhoon Claws") itemId = 3652;
  
  document.getElementById("worstItemPic").src = "http://ddragon.leagueoflegends.com/cdn/5.15.1/img/item/" + itemId + ".png";
}

