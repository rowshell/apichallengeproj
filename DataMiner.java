/*
Flow: An array of match ids to use is generated.
      Each match is searched and relevant players are added to a list
      Data is extracted from the list
      Data is sent to a new JSON file for use by the website

@author Jeremy Seiji Smith, The First of His Name
@version 3.0

Version 1.0 - Created methods to generate URL's and generate an array of match ids
Version 2.0 - Added list of Black Market items
              Added findRelevant to find all relevant participants in a match
Version 2.1 - Added package bmb (Black Market Buddy)
            - Relocated list of Black Market Items to ID.java
Version 2.2 - Changed data type to enums for better usability. Items are now in Items.java
Version 3.0 - Added methods to get the champion and item purchased by a summoner
            - Added method to get Kills/Deaths/Assists and calculate KDA
Version 4.0 - Added method to get win rate for a champ or item
            - Added class statHolder and fields itemList and champList for data storage
            - Updated getChamp and getItem to store data on win/loss
            - Began work on main

*/
package bmb;

import java.io.*;
import java.net.*;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.util.*;

public class DataMiner{

  private static String matchAPI = "https://na.api.pvp.net/api/lol/na/v2.2/match/";
  private static URL url;
  private static ArrayList<statHolder> itemList = new ArrayList<statHolder>();
  private static ArrayList<statHolder> champList = new ArrayList<statHolder>();

  /////////SECURE THIS LATER!////////
  private static String key = "?api_key=cd294b04-4505-4d18-89b8-6d1f0298d920";



  public static void main(String[] args){

    if( args.length < 2 ){
      printUsage();
      return;
    }
    
    String fileName = args[0];
    ArrayList<int[]> matchIDs = new ArrayList<int[]>();
    for(int i = 1; i < args.length; i++){
      matchIDs.add(args[i].genArray());
    }
    
    
//TODO: Add some kind of functionality to write data to file
//Include champion, item, and stat detail. Perhaps create a
//JSONObject full of item objects. Each item object has a champ
//object which has stats in it. Consider inner classes for item and champ
//in order to temporarily store data before JSONObject creation

  }

  /**
  * Method to write a JSONObject to a file
  * @param filename the name of the json file
  * @param obj the object to write
  * */
  private static void writeFile(String filename, JSONObject obj){
    try{
       FileWriter file = new FileWriter(filename);
       file.write(obj.toJSONString());
       file.flush();
       file.close();
    }
    catch(IOException e){
      e.printStackTrace();
    }
  }

  /**
  * Method to calculate the win rate of an item or champion
  * @param isChamp whether or not the element is a champion
  * @param id the id of the champion or item
  * @return the win rate of the item of champion
  * */
  public static double winRate(boolean isChamp, int id){
    int numGames = 0;
    int numWins = 0;
 
    //Access the appropriate ArrayList and sum wins and games
    if(isChamp){
      for(int i = 0; i < champList.size(); i++){
        if(id == champList.get(i).champion){
          numGames++;
          numWins+=champList.get(i).win;
        }
      }
    }
    else{
      for(int i = 0; i < itemList.size(); i++){
        if(id == itemList.get(i).item){
          numGames++;
          numWins+=itemList.get(i).win;
        }
      }
    }

    return (double)(numWins/numGames);
  }

  /**
  * Method to calculate the stats of a summoner in a match
  * @param summoner A JSONObject representing the summoner
  * @return a double array containing kills, deaths, assists, KDA
  * */
  private static double[] getKDA(JSONObject summoner){
    
    JSONObject stats = (JSONObject)summoner.get("stats");
   
    int kills = (int)stats.get("kills");

    int actualDeaths = (int)stats.get("deaths");
    int deaths = actualDeaths;
    if( deaths == 0 )
      deaths = 1;

    int assists = (int)stats.get("assists");

    double kda = (kills + assists)/deaths;

    boolean win = (boolean)stats.get("winner");
    int winner = 0;
    if(win)
      winner = 1; 

    double[] toReturn = new double[4];
    toReturn[0] = kills;
    toReturn[1] = actualDeaths;
    toReturn[2] = assists;
    toReturn[3] = kda;


    return toReturn;
  }

  /**
  * Method to return the name of the item purchased
  * by the summoner.
  * @param summoner A JSONObject representing the summoner
  * @return The name of the BMI purchased as a String
  * */
  private static String getItem(JSONObject summoner){

    JSONObject stats = (JSONObject)summoner.get("stats");

    //Determine which item was bought by searching the Items enum
    for(int i = 1; i < 7; i++){
      for( Items j : Items.values() ){
        if( (int)stats.get("item"+i) == j.id ){

          //Determine if win or loss, and put data into itemList
          boolean winner = (boolean)stats.get("winner");
          int win = 0;
          if(winner)
            win = 1;

          itemList.add( new statHolder(j.id, 0, win) );
          return j.name;
        }
      }
    }    

    return "";
  }

  /**
  * Method to return the name of the champion played by the summoner
  * @param summoner A JSONObject representing the summoner
  * @return The name of the champion played as a String
  * */
  private static String getChamp(JSONObject summoner){
  
    int champId = (int)summoner.get("championId");
    JSONObject stats = (JSONObject)summoner.get("stats");
  
    //Search through the Champions enum to find a match
    for(Champions c : Champions.values()){
      if(champId == c.id){

        //Determine if win or loss, and put data into champList
        boolean winner = (boolean)stats.get("winner");
        int win = 0;
        if(winner)
          win = 1;

        champList.add(new statHolder(0,c.id,win));
        return c.name;
      }
    }
    return "";
  }
      

  /**
  * Method to search a match and add all relevant participants to an ArrayList.
  * Participants are relevant if they bought exactly one Black Market item
  * @param match the match id to search
  * @param summoners the ArrayList to add the relevant summoners to
  * */
  @SuppressWarnings("unchecked")
  private static void findRelevant(int match, ArrayList<JSONObject> summoners){
    
    try{
      //Generate a URL and access the participants array
      genURL(matchAPI,"" + match, key);
      JSONParser parser = new JSONParser();
      JSONObject jso = (JSONObject)parser.parse(new InputStreamReader(url.openStream()));
      JSONArray participants = (JSONArray)jso.get("participants");

      //Loop through all 10 players and access stats
      Iterator<JSONObject> iter = participants.iterator();
      for(int i = 0; i < 10; i++){
        JSONObject player = iter.next();
        JSONObject stats = (JSONObject)player.get("stats");
        
        //Count the total number of Black Market Items(BMI)
        //purchased by the player
        int numBMI = 0;
        for(int j = 1; j < 7; j++){
          for( Items k : Items.values() ){
            if(k.id == (int)stats.get("item"+j)){
              numBMI++;   
            }
          }
        }
        //If only one BMI was purchased, the player is relevant to our stats
        if( numBMI == 1 ){
          summoners.add(player);
        }
      }
    }
    catch(IOException e){
      e.printStackTrace();
    }
    catch(ParseException e){
      e.printStackTrace();
    }
  }



  /**
  * Generates a URL in order to access Riot's api
  * @param first the beginning of the url, indicating which data to retrieve
  * @param id the id number of the desired object
  * @param key the api key
  * */
  private static void genURL(String first ,String id, String key){
    try{
      url = new URL(first+id+key);
    }
    catch(MalformedURLException e){
      e.printStackTrace();
    }
  }

  /**
  * Method to generate an array of IDs
  * @param dataFile the location of the JSON file which holds the IDs
  * @return an int array with the IDs
  * */
  @SuppressWarnings("unchecked")
  private static int[] genArray(String dataFile){

    try{
      ArrayList<Long> array = new ArrayList<Long>();

      //Get the json array from dataFile, and put the elements in array
      JSONParser parser = new JSONParser();
      JSONArray jso = (JSONArray)parser.parse(new FileReader(dataFile));
      Iterator<Long> iter = jso.iterator();
      while(iter.hasNext()){
        array.add(iter.next());
      }

      //Convert array (Long) to an int[]
      int[] toReturn = new int[array.size()];
      for(int i = 0; i < toReturn.length; i++){
        toReturn[i] = array.get(i).intValue();
      }
      return toReturn;

    }
    catch(FileNotFoundException e){
      e.printStackTrace();
    }
    catch(IOException e){
      e.printStackTrace();
    }
    catch(ParseException e){
     e.printStackTrace();
    }
    return new int[0];
  }

  public static void printUsage(){
    System.out.println("Usage:");
    System.out.println("Takes at least 2 args, the file to write to and the file(s) " +
                        "containing Riot's dataset of match ids");
    System.out.println("args[1] = fileName  //the name of the file to write to");
    System.out.println("args[2:] = dataFile //the names of the files to read in");
  }

     
















}//End of class DataMiner

