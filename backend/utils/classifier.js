const natural = require("natural");
const classifier = new natural.BayesClassifier();

function getClassifier() {
  classifier.addDocument("MCDONALD'S F1365 BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("CORDATA POST AND P BELLINGHAM, WA (4688)", "Bills");
  classifier.addDocument("CAR WASH KING BELLINGHAM, WA (4688)", "Car");
  classifier.addDocument("MUD BAY BAKERVIEW BELLINGHAM, WA (4688)", "Pets");
  classifier.addDocument("CRUISIN COFFEE-AIR BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("BOOMERS DRIVE IN 360-6472666, WA (4688)", "Food");
  classifier.addDocument(
    "Principal $1,279.35; Interest $0.00; Fees $0.00",
    "Transfer"
  );
  classifier.addDocument("TACO TIME BELLINGH 360-7332798, WA (4688)", "Food");
  classifier.addDocument("PANDA EXPRESS #107 BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("SQ *GOODS LOCAL BR Bellingham, WA (4688)", "Other");
  classifier.addDocument("THE BLACK CAT BELLINGHAM, WA (4688)", "Other");
  classifier.addDocument("76 - STARVIN SAM 1 BELLINGHAM, WA (4688)", "Car");
  classifier.addDocument(
    "ECHOCHERNIK 142-57867713, WA (4688)",
    "Entertainment"
  );
  classifier.addDocument("TST*BOUNDARY BAY B Bellingham, WA (4688)", "Other");
  classifier.addDocument("KULSHAN BREWING CO BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("HOTEL MURANO TACOMA, WA (4688)", "Travel");
  classifier.addDocument("HAGGEN 3430 BELLINGHAM, WA (4688)", "Grocery");
  classifier.addDocument("FAMOUSFOOTWEAR#246 BELLINGHAM, WA (4688)", "Retail");
  classifier.addDocument("JIMMY JOHNS 2909 TACOMA, WA (4688)", "Food");
  classifier.addDocument("STADIUM THRIFTWAY TACOMA, WA (4688)", "Shopping");
  classifier.addDocument("TST*WAFFLE STOP Tacoma, WA (4688)", "Food");
  classifier.addDocument("SEABECK LANDING GE SEABECK, WA (4688)", "Other");
  classifier.addDocument(
    "Principal $2,040.37; Interest $0.00; Fees $0.00",
    "Other"
  );
  classifier.addDocument("CHICK-FIL-A #03318 TACOMA, WA (4688)", "Food");
  classifier.addDocument("CHEVRON 0372029 EDMONDS, WA (4688)", "Car");
  classifier.addDocument("WAL-MART #2450 BELLINGHAM, WA (4688)", "Shopping");
  classifier.addDocument("SQ *RECTOR'S VACUU Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *COA MEXICAN EA Bellingham, WA (4688)", "Other");
  classifier.addDocument("JCPENNEY 2327 BELLINGHAM, WA (4688)", "Shopping");
  classifier.addDocument("MACYS  BELLINGHAM BELLINGHAM, WA (4688)", "Shopping");
  classifier.addDocument(
    "Dicks Sporting Goo Bellingham, WA (4688)",
    "Shopping"
  );
  classifier.addDocument("CEDAR AND SALT ESP COUPEVILLE, WA (4688)", "Other");
  classifier.addDocument("GORDONS FUSION CUI 360-5443085, WA (4688)", "Food");
  classifier.addDocument("SWINOMISH MKT LINK ANACORTES, WA (4688)", "Gas");
  classifier.addDocument("THAI MAISON BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("SWEET ART BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("SQ *FESTIVAL ESPRE Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *BEAR CREEK FAR Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *FUNKY'S HOT SA Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *SKIYOU RANCH Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *MOUNT BAKERY A Bellingham, WA (4688)", "Other");
  classifier.addDocument("SQ *BRAIDED RIVER Bellingham, WA (4688)", "Other");
  classifier.addDocument("EXXON MERIDIAN FOO BELLINGHAM, WA (4688)", "Other");
  classifier.addDocument("ELM ST MARKET BELLINGHAM, WA (4688)", "Other");
  classifier.addDocument("CHIPOTLE 2271 BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("OISHII TERIYAKI BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("THE HOME DEPOT #47 BELLINGHAM, WA (4688)", "Home");
  classifier.addDocument("MENCHIES # B629- L BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("IN AND OUT FOOD MA BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("PORT OF SUBS 0086 BELLINGHAM, WA (4688)", "Food");
  classifier.addDocument("PY *WESTSIDE PIZZA 360-510-0420, WA (4688)", "Food");
  classifier.addDocument("76 - STARVIN SAM 5 BELLINGHAM, WA (4688)", "Car");
  classifier.addDocument("SAFEWAY #3285 BELLINGHAM, WA (4688)", "Grocery");
  classifier.addDocument(
    "Principal $357.29; Interest $0.00; Fees $0.00",
    "Transfer"
  );
  classifier.addDocument("CRUISIN COFFEE-AIR BELLINGHAM, WA (4762)", "Food");
  classifier.addDocument("PANDA EXPRESS #107 BELLINGHAM, WA (4762)", "Food");
  classifier.addDocument("ARCO#81705ARCO BELLINGHAM, WA (4762)", "Car");
  classifier.addDocument("CANTINA GRILL 303-3429000, CO (4762)", "Food");
  classifier.addDocument("MCDONALD'S F19101 TACOMA, WA (4762)", "Food");
  classifier.addDocument("THE CREEK INC CRIPPLE CREEK, CO (4762)", "Other");
  classifier.addDocument("PHILLIPS 66 - JENN CASTLE PINES, CO (4762)", "Other");
  classifier.addDocument("CRIPPLE CREEK MARK CRIPLE CREEK, CO (4762)", "Other");
  classifier.addDocument("TST* THE DISTRICT Cripple Creek, CO (4762)", "Other");
  classifier.addDocument("GNCC GAS N ROLL CRIPPLE CREEK, CO (4762)", "Car");
  classifier.addDocument(
    "Principal $1,455.53; Interest $0.00; Fees $0.00",
    "Transfer"
  );
  classifier.addDocument("ANIMAL EMERGENCY C BELLINGHAM, WA (4762)", "Other");
  classifier.addDocument("MOUNTAIN ROOM BAR SEATTLE, WA (4762)", "Other");
  classifier.addDocument("TEDS MONTANA GRILL 404-2661344, CO (4762)", "Other");
  classifier.addDocument("RITE AID 05237 BELLINGHAM, WA (4762)", "Other");
  classifier.addDocument("OLIVERS CAFE PORTLAND, OR (4762)", "Other");
  classifier.addDocument("SHELL OIL100061360 OLYMPIA, WA (4762)", "Other");
  classifier.addDocument("SHELL OIL 57443144 CLACKAMAS, OR (4762)", "Other");
  classifier.addDocument(
    "SQ *SILVER FALLS H Sublimity, OR (4762)",
    "Entertainment"
  );
  classifier.addDocument("7-ELEVEN 37939 PORTLAND, OR (4762)", "Other");
  classifier.addDocument("STARBUCKS STORE 52 FEDERAL WAY, WA (4762)", "Food");
  classifier.addDocument("TAQUERIA EL CAZADO PORTLAND, OR (4762)", "Other");
  classifier.addDocument("MUD BAY BAKERVIEW BELLINGHAM, WA (4762)", "Pets");
  classifier.addDocument("HAGGEN 3430 BELLINGHAM, WA (4762)", "Grocery");
  classifier.addDocument(
    "WL *Steam Purchase 425-9522985, WA (4762)",
    "Entertainment"
  );
  classifier.addDocument("ROCK AND RYE BELLINGHAM, WA (4762)", "Food");
  classifier.addDocument(
    "Principal $736.23; Interest $0.00; Fees $0.00",
    "Transfer"
  );
  classifier.addDocument("WHATCOM FARMERS CO BELLINGHAM, WA (4762)", "Retail");
  classifier.addDocument("CHICK-FIL-A #03814 BOTHELL, WA (4762)", "Food");
  classifier.addDocument("76 - STARVIN SAM 5 BELLINGHAM, WA (4762)", "Car");
  classifier.addDocument("NORTHWEST MARKET BELLINGHAM, WA (4762)", "Retail");
  classifier.addDocument("TST* FAT SHACK - B BELLINGHAM, WA (4762)", "Food");
  classifier.addDocument("TST* ASLAN BREWING Bellingham, WA (4762)", "Food");
  classifier.addDocument("MARINE DRIVE MARKE BELLINGHAM, WA (4762)", "Other");
  classifier.addDocument("FRED MEYER #0667 BELLINGHAM, WA (4762)", "Retail");
  classifier.addDocument("OISHII TERIYAKI BELLINGHAM, WA (4762)", "Food");
  classifier.addDocument("O'REILLY 3706 BELLINGHAM, WA (4762)", "Car");
  classifier.addDocument("SPO*JALAPENOSDOWNT BELLINGHAM, WA (4762)", "Other");
  classifier.addDocument("GALLOWAY'S COCKTAI BELLINGHAM, WA (4762)", "Other");
  classifier.addDocument("CAR WASH KING BELLINGHAM, WA (4762)", "Car");
  classifier.addDocument(
    "SQ *GALLEY TO GO Bellingham, WA (4762)",
    "Entertainment"
  );
  classifier.addDocument(
    "SQ *STONES THROW B Bellingham, WA (4762)",
    "Entertainment"
  );

  // TODO: Feed in users expenses to train the classifier

  // Train the classifier
  classifier.train();
  return classifier;
}

module.exports = getClassifier;
