
  /**
  * Class to hold data on the item/champion id and win/loss
  * Instances are placed into itemList or champList and accessed
  * later to determine win rate
  * */
package bmb;

public class statHolder{
    int item;
    int champion;
    int win;

    //Constructor for a statHolder
    public statHolder(int item, int champion, int win){
      this.item = item;
      this.champion = champion;
      this.win = win;
    }
  }



