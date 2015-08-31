/*
Class for the Champions enum, which keeps track of
name and id
 @author Jeremy Seiji Smith
*/

package bmb;

public enum Champions{
  Aatrox(266,"Aatrox"),
  Thresh(412,"Thresh"),
  Tryndamere(23,"Tryndamere"),
  Gragas(79,"Gragas"),
  Cassiopeia(69,"Cassiopeia"),
  Ryze(13,"Ryze"),
  Poppy(78,"Poppy"),
  Sion(14,"Sion"),
  Annie(1,"Annie"),
  Nautilus(111,"Nautilus"),
  Karma(43,"Karma"),
  Lux(99,"Lux"),
  Ahri(103,"Ahri"),
  Olaf(2,"Olaf"),
  Viktor(112,"Viktor"),
  Anivia(34,"Anivia"),
  Garen(86,"Garen"),
  Singed(27,"Singed"),
  Lissandra(127,"Lissandra"),
  Maokai(57,"Maokai"),
  Morgana(25,"Morgana"),
  Evelynn(28,"Evelynn"),
  Fizz(105,"Fizz"),
  Heimerdinger(74,"Heimerdinger"),
  Zed(238,"Zed"),
  Rumble(68,"Rumble"),
  Sona(37,"Sona"),
  Mordekaiser(82,"Mordekaiser"),
  KogMaw(96,"Kog'Maw"),
  Katarina(55,"Katarina"),
  Lulu(117,"Lulu"),
  Ashe(22,"Ashe"),
  Karthus(30,"Karthus"),
  Alistar(12,"Alistar"),
  Darius(122,"Darius"),
  Vayne(67,"Vayne"),
  Udyr(77,"Udyr"),
  Varus(110,"Varus"),
  Leona(89,"Leona"),
  Jayce(126,"Jayce"),
  Syndra(134,"Syndra"),
  Pantheon(80,"Pantheon"),
  Riven(92,"Riven"),
  KhaZix(121,"Kha'Zix"),
  Corki(42,"Corki"),
  Caitlyn(51,"Caitlyn"),
  Azir(268,"Azir"),
  Nidalee(76,"Nidalee"),
  Galio(3,"Galio"),
  Kennen(85,"Kennen"),
  Veigar(45,"Veigar"),
  Bard(432,"Bard"),
  Gnar(150,"Gnar"),
  Graves(104,"Graves"),
  Malzahar(90,"Malhazar"),
  Vi(254,"Vi"),
  Kayle(10,"Kayle"),
  Irelia(39,"Irelia"),
  LeeSin(64,"Lee Sin"),
  Elise(60,"Elise"),
  Volibear(106,"Volibear"),
  Nunu(20,"Nunu"),
  TwistedFate(3,"Twisted Fate"),
  Jax(24,"Jax"),
  Shyvana(102,"Shyvana"),
  Kalista(429,"Kalista"),
  DrMundo(36,"Dr. Mundo"),
  TahmKench(36,"Tahm Kench"),
  Brand(63,"Brand"),
  Diana(131,"Diana"),
  Sejuani(113,"Sejuani"),
  Vladimir(8,"Vladimir"),
  Zac(154,"Zac"),
  RekSai(421,"Rek'Sai"),
  Quinn(133,"Quinn"),
  Akali(84,"Akali"),
  Tristana(18,"Tristana"),
  Hecarim(120,"Hecarim"),
  Sivir(15,"Sivir"),
  Lucian(236,"Lucian"),
  Rengar(107,"Rengar"),
  Warwick(19,"Warwick"),
  Skarner(72,"Skarner"),
  Malphite(54,"Malphite"),
  Yasuo(157,"Yasuo"),
  Xerath(101,"Xerath"),
  Teemo(17,"Teemo"),
  Nasus(75,"Nasus"),
  Renekton(58,"Renekton"),
  Draven(119,"Draven"),
  Shaco(35,"Shaco"),
  Swain(50,"Swain"),
  Ziggs(115,"Ziggs"),
  Talon(91,"Talon"),
  Janna(40,"Janna"),
  Ekko(245,"Ekko"),
  Orianna(61,"Orianna"),
  Fiora(114,"Fiora"),
  Fiddlesticks(9,"Fiddlesticks"),
  Rammus(33,"Rammus"),
  ChoGath(31,"Cho'Gath"),
  LeBlanc(7,"LeBlanc"),
  Soraka(16,"Soraka"),
  Zilean(26,"Zilean"),
  Nocturne(56,"Nocturne"),
  Jinx(222,"Jinx"),
  Yorick(83,"Yorick"),
  Urgot(6,"Urgot"),
  MissFortune(21,"Miss Fortune"),
  Wukong(62,"Wukong"),
  Blitzcrank(53,"Blitzcrank"),
  Shen(98,"Shen"),
  Braum(201,"Braum"),
  XinZhao(5,"Xin Zhao"),
  Twitch(29,"Twitch"),
  MasterYi(11,"Master Yi"),
  Taric(44,"Taric"),
  Amumu(32,"Amumu"),
  Gangplank(41,"Gangplank"),
  Trundle(48,"Trundle"),
  Kassadin(38,"Kassadin"),
  VelKoz(161,"Vel'Koz"),
  Zyra(143,"Zyra"),
  Nami(267,"Nami"),
  JarvanIV(59,"Jarvan IV"),
  Ezreal(81,"Ezreal");   ///FML!!!

  protected int id;
  protected String name;

  private Champions(int id, String name){
    this.id = id;
    this.name = name;
  }

}//End of enum Champions