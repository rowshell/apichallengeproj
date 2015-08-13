/*
This class allows the user to retrieve data from Riot's API.
JSON objects are retrieved, and functions in this class
extract certain data and manipulate it.

@author Jeremy Seiji Smith, The First of His Name
@version 1.0

*/

import java.io.*;
import java.net.*;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.util.*;

public class DataMiner{

  private static String matchAPI = "https://na.api.pvp.net/api/lol/na/v2.2/match/";
  private static URL url;

  /////////SECURE THIS LATER!////////
  private String key = "?api_key=cd294b04-4505-4d18-89b8-6d1f0298d920";

  public static void main(String[] args){

    //////This is just for test/////////
    int[] array = genArray("./Datasets/BILGEWATER/NA.json");
    System.out.println(array[0]);
    ////////////////////////////////////


  }

  /**
  * Generates a URL in order to access Riot's api
  * @param first the beginning of the url, indicating what kind
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

     




















}//End of class DataMiner
