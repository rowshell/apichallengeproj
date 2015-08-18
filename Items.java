/*Class for the Items enum, which keeps track of 
item name and id.
@author Jeremy Seiji Smith
*/



package bmb;
 
  public enum Items{
    Flesheater(3924,"Flesheater"),
    DeadMansPlate(3742,"Dead Man's Plate"),
    MartyrsGambit(3911,"Martyr's Gambit"),
    MirageBlade(3150,"Mirage Blade"),
    NetherstrideGrimoire(3431,"Netherstride Grimoire"),
    PoxArcana(3434,"Pox Arcana"),
    Puppeteer(3745,"Puppeteer"),
    RiteofRuin(3430,"Rite of Ruin"),
    StaffofFlowingWater(3744,"Staff of Flowing Water"),
    TrickstersGlass(3829,"Trickster's Glass"),
    TyphoonClaws(3652,"Typhoon Claws"),
    GlobeofTrust(3840,"Globe of Trust");

    protected int id;
    protected String name;

    private Items(int id, String name){
      this.id = id;
      this.name = name;
    }
  }
