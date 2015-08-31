/**
This script generates a champion page from a template.
The url is parsed, and the page written accordingly
@author Jeremy Seiji Smith
*/

write();

/**
* Method to parse the URL of the page, which contains the champ name
* @return the name of the champion this page should be created for
* */
function parseURL(){
  var url = document.URL;
  var hashtag = url.indexOf("#");
  var name = url.slice(hashtag+1);
  name = name.replace("_"," ");
  name = name.replace("%27","'");
  return name;
}

/**
* Function to generate the page for a specific champion
* */
function write(){
  var champName = parseURL();

  //Format the champ name in order to get the correct splash art
  var imgChampName = champName.replace(" ","");
  imgChampName = imgChampName.replace("'","");
  var imgURL = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + imgChampName + "_0.jpg";

  //Set each element in the page according to the champion's characteristics
  document.getElementById("splash").setAttribute("src",imgURL);
  document.getElementById("splash").setAttribute("alt",champName);
  document.getElementById("splash").setAttribute("title",champName);  

  document.getElementById("champName").innerHTML = champName;

  //Determine the item that helped and hurt the champion the most
  var bestItem = findBest(champName);
  if( bestItem == "" ){
    console.log("no best item found");
    return;
  }
  var worstItem = findWorst(champName);
  
  document.getElementById("helpItemPic").innerHTML = bestItem;
 
  document.getElementById("helpPreWin").innerHTML = Number(getChampionWinRate( bestItem, champName, 0 )).toFixed(3);
  document.getElementById("helpPostWin").innerHTML = Number(getChampionWinRate( bestItem, champName, 1 )).toFixed(3);
  document.getElementById("helpPreKDA").innerHTML = Number(getChampionKDA( bestItem, champName, 0 )).toFixed(3);
  document.getElementById("helpPostKDA").innerHTML = Number(getChampionKDA( bestItem, champName, 1 )).toFixed(3);

  document.getElementById("hurtItemPic").innerHTML = worstItem;

  document.getElementById("hurtPreWin").innerHTML = Number(getChampionWinRate( worstItem, champName, 0 )).toFixed(3);
  document.getElementById("hurtPostWin").innerHTML = Number(getChampionWinRate( worstItem, champName, 1 )).toFixed(3);
  document.getElementById("hurtPreKDA").innerHTML = Number(getChampionKDA( worstItem, champName, 0 )).toFixed(3);
  document.getElementById("hurtPostKDA").innerHTML = Number(getChampionKDA( worstItem, champName, 1 )).toFixed(3);
}
