/**
This class provides the ability to loadJSON object information onto the site.
Functions are defined which get specific stats about champions and items
@author Jeremy Seiji Smith
*/

var num = 1;
var pre; 
var post;
var url = "pre.json";
loadJSONs(url, 0);
url = "post.json";
loadJSONs(url, 1);

/**
* method to load the json files and store them in pre and post
* @param url the url of the json file to load
* @param which the type of data loaded. 0 for pre, 1 for post
* */
function loadJSONs( url, which ){
  var AJAX_req = new XMLHttpRequest();
  AJAX_req.overrideMimeType("application/json");
  AJAX_req.open('GET',url,false);
  AJAX_req.onreadystatechange = function(){
    if(AJAX_req.readyState==4 && AJAX_req.status=="200"){
      if( which == 0){
        pre = JSON.parse( AJAX_req.responseText ); 
      }
      else{
        post = JSON.parse( AJAX_req.responseText );
      }
    }
  };

 AJAX_req.send();
} 
/*
function loadJSONS(callback){
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET','pre.json',true);
  xobj.onreadystatechange=function(){
    if(xobj.readystate==4 && xobj.status=="200"){
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
function init(){
console.log("init called");
  loadJSONS(function(response){
    pre = JSON.parse(response);
  });
}*/

/**
* method to extract the win rate of an item
* @param item the name of the item
* */
function getItemWinRate( item ){
  return post[item]["Win Rate"];
}

/**
* method to extract the pick rate of an item
* @param item the name of the item
* */
function getItemPickRate( item ){
    return post[item]["Pick Rate"];
  
}

/**
* method to extract the win rate of a champion
* @param item the name of the item
* @param champion the name of the champion
* @param which 0 for pre, 1 for post
* */
function getChampionWinRate( item, champion, which ){
  if( which == 0 ){
    if( pre[""][champion] == undefined )
      return "Unplayed";
    return pre[""][champion]["Win Rate"];
  }
  else{
    if( post[item][champion] == undefined || post[item][champion]["numGames"] < num )
      return "Unplayed";
    return post[item][champion]["Win Rate"];
  }
}

/**
* method to extract the pick rate of a champion
* @param item the name of the item
* @param champion the name of the champion
* @param which 0 for pre, 1 for post
* */
function getChampionPickRate( item, champion, which ){
  if( which == 0 ){
    if( pre[""][champion] == undefined )
      return "Unplayed";
    return pre[""][champion]["Pick Rate"];
  }
  else{
    if( post[item][champion] == undefined || post[item][champion]["numGames"] < num )
      return "Unplayed";
    return post[item][champion]["Pick Rate"];
  }
}

/**
* method to extract the kda of a champion
* @param item the name of the item
* @param champion the name of the champion
* @param which 0 for pre, 1 for post
* */
function getChampionKDA( item, champion, which ){
  if( which == 0 ){
    if( pre[""][champion] == undefined )
      return "Unplayed";
    return pre[""][champion]["KDA"];
  }
  else{
    if( post[item][champion] == undefined || post[item][champion]["numGames"] < num )
      return "Unplayed";
    return post[item][champion]["KDA"];
  }
}

/**
* Function to evaluate the difference between pre and post stats. Be careful! I didn't add
* any improper use handles
* @param isWinRate if we want the win rate
* @param isPickRate if we want the pick rate
* @param isKDA if we want the KDA (only for champions)
* @param item the item to search under
* @param champion the champion to search under
* */
function getDifference( isWinRate, isPickRate, isKDA, item, champion ){
    if( pre[""][champion] == undefined || post[item] == undefined ||
        post[item][champion] == undefined || post[item][champion]["numGames"] < num )
      return "Unplayed";
    if( isWinRate == 1 ){
      return post[item][champion]["Win Rate"] - pre[""][champion]["Win Rate"];
    }
    else if( isPickRate == 1 ){
      return post[item][champion]["Pick Rate"] = pre[""][champion]["Pick Rate"];
    }
    else{
      return post[item][champion]["KDA"] - pre[""][champion]["KDA"];
    }
}

/**
* Function to find the best item for a champion
* @param champion the name of the champion
* @return the name of the best item for this champion
* */
function findBest( champion ){
  var tempBest = 0; 
  var item = "";
  var winDiff;
  var kdaDiff;

  //Check each item in the champ's list
  for( var key in pre ){
    if( pre.hasOwnProperty(key) ){

      //Calculate the difference and account for unplayed items
      winDiff = getDifference( 1, 0, 0, key, champion );
      kdaDiff = getDifference(  0, 0, 1, key, champion );
      if(winDiff == "Unplayed" || kdaDiff == "Unplayed")
        continue;
    
      //Find the maximum sum
      if( winDiff + kdaDiff > tempBest ){
        tempBest = winDiff + kdaDiff;
        item = key;
      }
    }
  }
  return item;
}

/**
* Function to find the worst item for a champion
* @param champion the name of the champion
* @return the name of the worst item for this champion
*/
function findWorst( champion ){
  var tempWorst = 0;
  var item = "";
  var winDiff;
  var kdadiff;
  
  //Check each item in the champ's list
  for( var key in pre ){
    if( pre.hasOwnProperty(key) ){
 
      //Calulate the difference and account for unplayed
      winDiff = getDifference( 1, 0, 0, key, champion );
      kdaDiff = getDifference( 0, 0, 1, key, champion );
      if(winDiff == "Unplayed" || kdaDiff == "Unplayed")
        continue;

      //Calculate the minimum sum
      if( winDiff + kdaDiff < tempWorst ){
        tempWorst = winDiff + kdaDiff;
        item = key;
      }
    }
  }
  return item;
}



