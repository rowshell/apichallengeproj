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
  console.log(imgChampName);
  console.log(champName);
  
  if( imgChampName == "wukong") imgChampName = "MonkeyKing";
  else if( imgChampName == "VelKoz") imgChampName = "Velkoz";
  else if( imgChampName == "ChoGath") imgChampName = "Chogath";
  else if( imgChampName == "Dr.Mundo") imgChampName = "DrMundo";
  else if( imgChampName == "Fiddlesticks") imgChampName = "FiddleSticks";
  else if( imgChampName == "KhaZix") imgChampName = "Khazix";
  else if( imgChampName == "LeBlanc") imgChampName = "Leblanc";
  
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
  document.getElementById("helpItemPic").title = bestItem;
  document.getElementById("helpLink").innerHTML = bestItem;
 
  document.getElementById("helpPreWin").innerHTML = Number(getChampionWinRate( bestItem, champName, 0 )).toFixed(3);
  document.getElementById("helpPostWin").innerHTML = Number(getChampionWinRate( bestItem, champName, 1 )).toFixed(3);
  document.getElementById("helpPreKDA").innerHTML = Number(getChampionKDA( bestItem, champName, 0 )).toFixed(3);
  document.getElementById("helpPostKDA").innerHTML = Number(getChampionKDA( bestItem, champName, 1 )).toFixed(3);

  document.getElementById("hurtItemPic").innerHTML = worstItem;
  document.getElementById("hurtItemPic").title = worstItem;
  document.getElementById("hurtLink").innerHTML = worstItem;

  document.getElementById("hurtPreWin").innerHTML = Number(getChampionWinRate( worstItem, champName, 0 )).toFixed(3);
  document.getElementById("hurtPostWin").innerHTML = Number(getChampionWinRate( worstItem, champName, 1 )).toFixed(3);
  document.getElementById("hurtPreKDA").innerHTML = Number(getChampionKDA( worstItem, champName, 0 )).toFixed(3);
  document.getElementById("hurtPostKDA").innerHTML = Number(getChampionKDA( worstItem, champName, 1 )).toFixed(3);
  
  var itemId = 0;
  if(bestItem == "Dead Man's Plate") itemId = 3742;
  else if(bestItem == "Flesheater") itemId = 3924;
  else if(bestItem == "Globe of Trust") itemId = 3840;
  else if(bestItem == "Martyr's Gambit") itemId = 3911;
  else if(bestItem == "Mirage Blade") itemId = 3150;
  else if(bestItem == "Netherstride Grimoire") itemId = 3431;
  else if(bestItem == "Pox Arcana") itemId = 3434;
  else if(bestItem == "Puppeteer") itemId = 3745;
  else if(bestItem == "Rite of Ruin") itemId = 3430;
  else if(bestItem == "Staff of Flowing Water") itemId = 3744;
  else if(bestItem == "Trickster's Glass") itemId = 3829;
  else if(bestItem == "Typhoon Claws") itemId = 3652;
  
  document.getElementById("helpItemPic").src = "http://ddragon.leagueoflegends.com/cdn/5.15.1/img/item/" + itemId + ".png";
  
  if(worstItem == "Dead Man's Plate") itemId = 3742;
  else if(worstItem == "Flesheater") itemId = 3924;
  else if(worstItem == "Globe of Trust") itemId = 3840;
  else if(worstItem == "Martyr's Gambit") itemId = 3911;
  else if(worstItem == "Mirage Blade") itemId = 3150;
  else if(worstItem == "Netherstride Grimoire") itemId = 3431;
  else if(worstItem == "Pox Arcana") itemId = 3434;
  else if(worstItem == "Puppeteer") itemId = 3745;
  else if(worstItem == "Rite of Ruin") itemId = 3430;
  else if(worstItem == "Staff of Flowing Water") itemId = 3744;
  else if(worstItem == "Trickster's Glass") itemId = 3829;
  else if(worstItem == "Typhoon Claws") itemId = 3652;
  
  document.getElementById("hurtItemPic").src = "http://ddragon.leagueoflegends.com/cdn/5.15.1/img/item/" + itemId +".png";
}
