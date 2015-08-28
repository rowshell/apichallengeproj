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
  var imgURL = "http://ddragon.leagueoflegends.com/cdn/img/champion.splash/" + imgChampName + "_0.jpg";

  //Set each element in the page according to the champion's characteristics
  document.getElementById("splash").setAttribute("src",imgURL);
  document.getElementById("splash").setAttribute("alt",champName);
  document.getElementById("splash").setAttribute("title",champName);  

  document.getElementById("champName").innerHTML = champName;

  //Determine the item that helped and hurt the champion the most
  var bestItem = getBest(champName);
  var worstItem = getWorst(champName);
 
  document.getElementById("helpPreWin").innerHTML = getChampionWinRate( bestItem, champName, 0 );
  document.getElementById("helpPostWin").innerHTML = getChampionWinRate( bestItem, champName, 1 );
  document.getElementById.("helpPreKDA").innerHTML = getChampionKDA( bestItem, champName, 0 );
  document.getElementById("helpPostKDA").innerHTML = getChampionKDA( bestItem, champName, 1 );

  document.getElementById("hurtPreWin").innerHTML = getChampionWinRate( worstItem, champName, 0 );
  document.getElementById("hurtPostWin").innerHTML = getChampionWinRate( worstItem, champName, 1 );
  document.getElementById("hurtPreKDA").innerHTML = getChampionKDA( worstItem, champName, 0 );
  document.getElementById("hurtPostKDA").innerHTML = getChampionKDA( worstItem, champName, 1 );
}
