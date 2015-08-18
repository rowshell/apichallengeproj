
package bmb;

import java.util.*;


public class Item{
  public String name = "";
  public int id = 0;
  public double winRate = 0.0;
  public ArrayList<Champion> itemChamps = new ArrayList<Champion>();

  public Item(){}

  public Item(String name){
    this.name = name;
  }

}
