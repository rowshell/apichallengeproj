/*
Class for the Items enum, which keeps track of 
item name and id.

@author Jeremy Seiji Smith
*/



package bmb;
 
  public enum Items{
    Flesheater(3924),
    DeadMansPlate(3742),
    MartyrsGambit(3911),
    MirageBlade(3150),
    NetherstrideGrimoire(3431),
    PoxArcana(3434),
    Puppeteer(3745),
    RiteofRuin(3430),
    StaffofFlowingWater(3744),
    TrickstersGlass(3829),
    TyphoonClaws(3652),
    GlobeofTrust(3840);

    protected int value;

    private Items(int value){
      this.value = value;
    }
  }
