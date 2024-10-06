const natural = require("natural");
const classifier = new natural.BayesClassifier();

function getClassifier() {
  // Replace the category names with their corresponding categoryId
  classifier.addDocument(
    "MCDONALD'S F1365 BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "CORDATA POST AND P BELLINGHAM, WA (4688)",
    "66cd6329b0eff81d3c3d1e3c"
  ); // Bills
  classifier.addDocument(
    "CAR WASH KING BELLINGHAM, WA (4688)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "MUD BAY BAKERVIEW BELLINGHAM, WA (4688)",
    "h8j4e5f6-3l0i-4k9j-a59l-3m5j1k6l4i00"
  ); // Pets
  classifier.addDocument(
    "CRUISIN COFFEE-AIR BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "BOOMERS DRIVE IN 360-6472666, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "Principal $1,279.35; Interest $0.00; Fees $0.00",
    "66cd6329b0eff81d3c3d1e48"
  ); // Transfer (Other)
  classifier.addDocument(
    "TACO TIME BELLINGH 360-7332798, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "PANDA EXPRESS #107 BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "SQ *GOODS LOCAL BR Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "THE BLACK CAT BELLINGHAM, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "76 - STARVIN SAM 1 BELLINGHAM, WA (4688)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "ECHOCHERNIK 142-57867713, WA (4688)",
    "a1b5c6d7-6e3b-7d2c-a82e-6f8c4d9e7b30"
  ); // Entertainment
  classifier.addDocument(
    "TST*BOUNDARY BAY B Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "KULSHAN BREWING CO BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "HOTEL MURANO TACOMA, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Travel (Other)
  classifier.addDocument(
    "HAGGEN 3430 BELLINGHAM, WA (4688)",
    "c3e8f9a1-8g5d-9f4e-a04g-8h0e6f1g9d50"
  ); // Grocery
  classifier.addDocument(
    "FAMOUSFOOTWEAR#246 BELLINGHAM, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Retail (Shopping)
  classifier.addDocument(
    "JIMMY JOHNS 2909 TACOMA, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "STADIUM THRIFTWAY TACOMA, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Shopping
  classifier.addDocument(
    "TST*WAFFLE STOP Tacoma, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "SEABECK LANDING GE SEABECK, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "Principal $2,040.37; Interest $0.00; Fees $0.00",
    "66cd6329b0eff81d3c3d1e48"
  ); // Other
  classifier.addDocument(
    "CHICK-FIL-A #03318 TACOMA, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "CHEVRON 0372029 EDMONDS, WA (4688)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "WAL-MART #2450 BELLINGHAM, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Shopping
  classifier.addDocument(
    "SQ *RECTOR'S VACUU Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *COA MEXICAN EA Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "JCPENNEY 2327 BELLINGHAM, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Shopping
  classifier.addDocument(
    "MACYS  BELLINGHAM BELLINGHAM, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Shopping
  classifier.addDocument(
    "Dicks Sporting Goo Bellingham, WA (4688)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Shopping
  classifier.addDocument(
    "CEDAR AND SALT ESP COUPEVILLE, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "GORDONS FUSION CUI 360-5443085, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "SWINOMISH MKT LINK ANACORTES, WA (4688)",
    "d4f0a1b2-9h6e-0g5f-a15h-9i1f7g2h0e60"
  ); // Gas
  classifier.addDocument(
    "THAI MAISON BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "SWEET ART BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "SQ *FESTIVAL ESPRE Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *BEAR CREEK FAR Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *FUNKY'S HOT SA Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *SKIYOU RANCH Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *MOUNT BAKERY A Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SQ *BRAIDED RIVER Bellingham, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "EXXON MERIDIAN FOO BELLINGHAM, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "ELM ST MARKET BELLINGHAM, WA (4688)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "CHIPOTLE 2271 BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "OISHII TERIYAKI BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "THE HOME DEPOT #47 BELLINGHAM, WA (4688)",
    "e5g1b2c3-0i7f-1h6g-a26i-0j2g8h3i1f70"
  ); // Home
  classifier.addDocument(
    "MENCHIES # B629- L BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "IN AND OUT FOOD MA BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "PORT OF SUBS 0086 BELLINGHAM, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "PY *WESTSIDE PIZZA 360-510-0420, WA (4688)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "76 - STARVIN SAM 5 BELLINGHAM, WA (4688)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "SAFEWAY #3285 BELLINGHAM, WA (4688)",
    "c3e8f9a1-8g5d-9f4e-a04g-8h0e6f1g9d50"
  ); // Grocery
  classifier.addDocument(
    "Principal $357.29; Interest $0.00; Fees $0.00",
    "66cd6329b0eff81d3c3d1e48"
  ); // Transfer (Other)
  classifier.addDocument(
    "CRUISIN COFFEE-AIR BELLINGHAM, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "PANDA EXPRESS #107 BELLINGHAM, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "ARCO#81705ARCO BELLINGHAM, WA (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "CANTINA GRILL 303-3429000, CO (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "MCDONALD'S F19101 TACOMA, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "THE CREEK INC CRIPPLE CREEK, CO (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "PHILLIPS 66 - JENN CASTLE PINES, CO (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "CRIPPLE CREEK MARK CRIPLE CREEK, CO (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "TST* THE DISTRICT Cripple Creek, CO (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "GNCC GAS N ROLL CRIPPLE CREEK, CO (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "Principal $1,455.53; Interest $0.00; Fees $0.00",
    "66cd6329b0eff81d3c3d1e48"
  ); // Transfer (Other)
  classifier.addDocument(
    "ANIMAL EMERGENCY C BELLINGHAM, WA (4762)",
    "h8j4e5f6-3l0i-4k9j-a59l-3m5j1k6l4i00"
  ); // Pets
  classifier.addDocument(
    "MOUNTAIN ROOM BAR SEATTLE, WA (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "TEDS MONTANA GRILL 404-2661344, CO (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "RITE AID 05237 BELLINGHAM, WA (4762)",
    "66cd6329b0eff81d3c3d1e49"
  ); // Personal Care
  classifier.addDocument(
    "OLIVERS CAFE PORTLAND, OR (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "SHELL OIL100061360 OLYMPIA, WA (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Other
  classifier.addDocument(
    "SHELL OIL 57443144 CLACKAMAS, OR (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Other
  classifier.addDocument(
    "SQ *SILVER FALLS H Sublimity, OR (4762)",
    "a1b5c6d7-6e3b-7d2c-a82e-6f8c4d9e7b30"
  ); // Entertainment
  classifier.addDocument(
    "7-ELEVEN 37939 PORTLAND, OR (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "STARBUCKS STORE 52 FEDERAL WAY, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "TAQUERIA EL CAZADO PORTLAND, OR (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "MUD BAY BAKERVIEW BELLINGHAM, WA (4762)",
    "h8j4e5f6-3l0i-4k9j-a59l-3m5j1k6l4i00"
  ); // Pets
  classifier.addDocument(
    "HAGGEN 3430 BELLINGHAM, WA (4762)",
    "c3e8f9a1-8g5d-9f4e-a04g-8h0e6f1g9d50"
  ); // Grocery
  classifier.addDocument(
    "WL *Steam Purchase 425-9522985, WA (4762)",
    "a1b5c6d7-6e3b-7d2c-a82e-6f8c4d9e7b30"
  ); // Entertainment
  classifier.addDocument(
    "ROCK AND RYE BELLINGHAM, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "Principal $736.23; Interest $0.00; Fees $0.00",
    "66cd6329b0eff81d3c3d1e48"
  ); // Transfer (Other)
  classifier.addDocument(
    "WHATCOM FARMERS CO BELLINGHAM, WA (4762)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Retail
  classifier.addDocument(
    "CHICK-FIL-A #03814 BOTHELL, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "76 - STARVIN SAM 5 BELLINGHAM, WA (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "NORTHWEST MARKET BELLINGHAM, WA (4762)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Retail
  classifier.addDocument(
    "TST* FAT SHACK - B BELLINGHAM, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "TST* ASLAN BREWING Bellingham, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "MARINE DRIVE MARKE BELLINGHAM, WA (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "FRED MEYER #0667 BELLINGHAM, WA (4762)",
    "i9k5f6g7-4m1j-5l0k-a60m-4n6k2l7m5j10"
  ); // Retail
  classifier.addDocument(
    "OISHII TERIYAKI BELLINGHAM, WA (4762)",
    "b2c7d8e9-7f4c-8e3d-a93f-7g9d5e0f8c40"
  ); // Food
  classifier.addDocument(
    "O'REILLY 3706 BELLINGHAM, WA (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "SPO*JALAPENOSDOWNT BELLINGHAM, WA (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "GALLOWAY'S COCKTAI BELLINGHAM, WA (4762)",
    "j0l6g7h8-5n2k-6m1l-a71n-5o7l3m8n6k20"
  ); // Other
  classifier.addDocument(
    "CAR WASH KING BELLINGHAM, WA (4762)",
    "e8c3b7d2-3f1e-4c1d-a81c-4f7b2e9d3f60"
  ); // Car
  classifier.addDocument(
    "SQ *GALLEY TO GO Bellingham, WA (4762)",
    "a1b5c6d7-6e3b-7d2c-a82e-6f8c4d9e7b30"
  ); // Entertainment
  classifier.addDocument(
    "SQ *STONES THROW B Bellingham, WA (4762)",
    "a1b5c6d7-6e3b-7d2c-a82e-6f8c4d9e7b30"
  ); // Entertainment

  // Train the classifier
  classifier.train();
  return classifier;
}

module.exports = getClassifier;
