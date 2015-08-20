/*
Class that defines a Champion object.
Champions are used in order to store data about
a League champion
@author Jeremy Seiji Smith
*/

package bmb;


public class Champion{
  public String name = "";
  public int id = 0;
  public int games = 0;
  public int wins = 0;
  public double winRate = 0.0;
  public double kda = 0.0;
  public double pickRate = 0.0;
  
  public Champion(){}

  public Champion(String name){
    this.name = name;
  }
  
}
