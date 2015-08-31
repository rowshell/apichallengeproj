
findBestItem();
findWorstItem();

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

      if( winDiff + kdaDiff > currBestScore ){
        currBest = item;
        currBestScore = winDiff + kdaDiff;
        winDiffStore = winDiff;
        kdaDiffStore = kdaDiff;
        bestItemNumChamps = numChamps;
        console.log("New best found");
      }
      winDiff = 0;
      kdaDiff = 0;
      numChamps = 0;
    }
  }
  winDiffStore /= bestItemNumChamps;
  kdaDiffStore /= bestItemNumChamps;
  document.getElementById("increaseWinRate").innerHTML = Number(winDiffStore).toFixed(3);
  document.getElementById("increaseKDA").innerHTML = Number(kdaDiffStore).toFixed(3);
  document.getElementById("bestItemPic").src = ""; 
  document.getElementById("bestItemPic").innerHTML = currBest;
}

function findWorstItem(){
  var currWorst = "";
  var win;
  var kda;
  var numChamps = 0;
  var winDiff = 0;
  var kdaDiff = 0;
  var winDiffStore = 0;
  var kdaDiffStore = 0;

  for( var item in post ){
    if( post.hasOwnProperty(item) ){

      for( var champion in item ){
 
        win = getDifference( 1, 0, 0, item, champion );
        kda = getDifference( 0, 0, 1, item, champion );
        if(win == "Unplayed" || kda == "Unplayed")
          continue;

        winDiff += win;
        kdaDiff += kda;
        numChamps++;
      }
      if( winDiff + kdaDiff < currWorst ){
        currWorst = item;
        winDiffStore = winDiff;
        kdaDiffStore = kdaDiff;
      }
      winDiff = 0;
      kdaDiff = 0;
    }
  }
  document.getElementById("decreaseWinRate").innerHTML = Number(winDiffStore).toFixed(3);
  document.getElementById("decreaseKDA").innerHTML = Number(kdaDiffStore).toFixed(3);
  document.getElementById("worstItemPic").src = "";
  document.getElementById("worstItemPic").alt = currWorst;
  document.getElementById("worstItemPic").innerHTML = currWorst;
}
