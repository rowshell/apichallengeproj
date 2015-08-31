/*
Class that defines an Item object.
Items are used in order to store data about a Black Market Item
*/
package bmb;

import java.util.*;


public class Item{
  public String name = "";
  public int id = 0;
  public double winRate = 0.0;
  public ArrayList<Champion> itemChamps = new ArrayList<Champion>();
  public int wins = 0;
  public int games = 0;
  public double pickRate = 0.0;

  public Item(){}

  public Item(String name){
    this.name = name;
  }

}
