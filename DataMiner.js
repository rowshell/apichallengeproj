


var pre; 
var post;
var url = "pre.json";
loadJSONs(url, 0);
url = "post.json";
loadJSONs(url, 1);

/*
loadJSONs("post.json",1);
function test(){
loadJSONs("post.json",1);
console.log("this is being reached");
return "hello";
}
*/
/**
* method to load the json files and store them in pre and post
* @param url the url of the json file to load
* @param which the type of data loaded. 0 for pre, 1 for post
* */
function loadJSONs( url, which ){
  var AJAX_req = new XMLHttpRequest();
  AJAX_req.overrideMimeType("application/json");
  AJAX_req.open('GET',url,true);
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
return post;
} 

/**
* method to extract the win rate of an item
* @param item the name of the item
* @param which 0 for pre, 1 for post
* */
function getItemWinRate( item, which ){
  if( which == 0 ){
    return pre[item]["Win Rate"];
  }
  else{
    return post[item]["Win Rate"];
  }
}

/**
* method to extract the pick rate of an item
* @param item the name of the item
* @param which 0 for pre, 1 for post
* */
function getItemPickRate( item, which ){
  if( which == 0 ){
    return pre[item]["Pick Rate"];
  }
  else{
    return post[item]["Pick Rate"];
  }
}

/**
* method to extract the win rate of a champion
* @param item the name of the item
* @param champion the name of the champion
* @param which 0 for pre, 1 for post
* */
function getChampionWinRate( item, champion, which ){
  if( which == 0 ){
    return pre[item][champion]["Win Rate"];
  }
  else{
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
    return pre[item][champion]["Pick Rate"];
  }
  else{
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
    return pre[item][champion][KDA];
  }
  else{
    return post[item][champion][KDA];
  }
}

/**
* Function to evaluate the difference between pre and post stats. Be careful! I didn't add
* no improper use handles
* @param isItem if we want an item stat
* @param isChampion if we want a champion stat
* @param isWinRate if we want the win rate
* @param isPickRate if we want the pick rate
* @param isKDA if we want the KDA (only for champions)
* @param item the item to search under
* @param champion the champion to search under
* */
function getDifference( isItem, isChampion, isWinRate, isPickRate, isKDA, item, champion ){
  if( isItem == 1 ){
    if( isWinRate == 1 ){
      return post[item]["Win Rate"] - pre[item]["Win Rate"];
    }
    else{
      return post[item]["Pick Rate"] - pre[item]["Pick Rate"];
    }
  }
  else{
    if( isWinRate == 1 ){
      return post[item][champion]["Win Rate"] - pre[item][champion]["Win Rate"];
    }
    else if( isPickRate == 1 ){
      return post[item][champion]["Pick Rate"] = pre[item][champion]["Pick Rate"];
    }
    else{
      return post[item][champion]["KDA"] - pre[item][champion]["KDA"];
    }
  }
}
