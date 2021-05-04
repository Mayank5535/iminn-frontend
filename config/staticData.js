import React from "react";
import {
  DashboardIcon,
  MatchesIcon,
  RatingIcon,
  SettingsIcon,
  StatsIcon,
} from "@components/UI/Icons";
import Images from "@config/images";

export const roles = [
  {
    id: 1,
    name: "keeper",
    icon: Images.roleKeeper,
  },
  {
    id: 2,
    name: "defender",
    icon: Images.roleDefender,
  },
  {
    id: 3,
    name: "midfielder",
    icon: Images.roleMidFielder,
  },
  {
    id: 4,
    name: "striker",
    icon: Images.roleStriker,
  },
];

export const navMenus = [
  {
    id: 1,
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "Stats",
    icon: <StatsIcon />,
  },
  {
    id: 3,
    name: "Rates",
    icon: <RatingIcon />,
  },
  {
    id: 4,
    name: "Settings",
    icon: <SettingsIcon />,
  },
  {
    id: 5,
    name: "Matches",
    icon: <MatchesIcon />,
  },
];

export const sportsCenters = [
  {
    Name: "The Victory Academy",
    Address: "Magpie Hall Road, Chatham, Kent, ME4 5JB",
    Code: "",
    Contacts: "tel:+44 333 360 2140",
    "Types of pitches": "3G pitch",
    Email: "football@thevictoryacademy.org.uk",
    "Website URL":
      "https://www.thevictoryacademy.org.uk/about-us/facilities-hire/",
  },
  {
    Name: "SOUTHEND GARON PARK",
    Address:
      "Garon Park Cricket Ground, Eastern Ave\r\nSouthend-on-Sea. SS2 4FA",
    Code: "",
    Contacts: "01702 414079",
    "Types of pitches": "11-A-Side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/southend-garon-park",
  },
  {
    Name: "SOUTHEND",
    Address:
      "\r\nChase High School, Prittlewell Chase\r\nSouthend-on-Sea. SS0 0RT",
    Code: "",
    Contacts: "01702 414 077",
    "Types of pitches": "5 11 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/southend",
  },
  {
    Name: "MOTTINGHAM COLDHARBOUR",
    Address:
      "Coldharbour Leisure Centre, Chapel Farm Road, Eltham\r\nLondon. SE9 3LX",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "5 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/mottingham-coldharbour",
  },
  {
    Name: "BROMLEY",
    Address: "Bromley Football Club, Hayes Lane\r\nBromley. BR2 9EF",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": " 2 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bromley",
  },
  {
    Name: "MILE END",
    Address: "\r\n190 Burdett Rd, Mile End,\r\nLondon. E3 4HL",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "5 7 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/mile-end",
  },
  {
    Name: "WORKINGTON",
    Address:
      "\r\nWorkington Leisure Centre, Griffin Street\r\nWorkington. CA14 2DX",
    Code: "",
    Contacts: "0333 577 4628",
    "Types of pitches": "5 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/workington",
  },
  {
    Name: "BOURNEMOUTH LITTLEDOWN",
    Address: "Littledown Centre, Chaseside\r\nBournemouth. BH7 7DX",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "6 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bournemouth-littledown",
  },
  {
    Name: "SWINDON OASIS",
    Address: "Oasis Leisure Centre, North Star Avenue\r\nSwindon. SN2 1EP",
    Code: "",
    Contacts: "0333 577 4628",
    "Types of pitches": "5 a side",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/swindon-oasis",
  },
  {
    Name: "MANCHESTER DENMARK ROAD",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": "3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/manchester-denmark-road",
  },
  {
    Name: "MANCHESTER TENNIS AND FOOTBALL CENTRE",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": " 3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/manchester-tennis-and-football-centre",
  },
  {
    Name: "MANCHESTER WHALLEY RANGE STADIUM",
    Code: "",
    Contacts: " 0333 577 7874",
    "Types of pitches": "8 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/whalley-range-stadium",
  },
  {
    Name: "YORK ENERGISE",
    Address: "120 Denmark Rd ",
    Code: "",
    Contacts: " 0333 577 4625",
    "Types of pitches": "3 x 7-A-Side Astro Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/york-energise",
  },
  {
    Name: "NOTTINGHAM",
    Address: "Etihad Campus, 9 Sportcity Way, Manchester . M11 3DU",
    Code: "",
    Contacts: "0115 822 3103",
    "Types of pitches": " 8 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/nottingham",
  },
  {
    Name: "YORK BURNHOLME",
    Address: "Whalley Range, 11-18 Wilbraham Rd Manchester. M16 8GW",
    Code: "",
    Contacts: "0333 577 4625",
    "Types of pitches": "3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/york-burnholme",
  },
  {
    Name: "BURY",
    Address: "Cornlands Rd York. YO24 3DX",
    Code: "",
    Contacts: "0161 393 2265",
    "Types of pitches": " 2 x 7-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bury",
  },
  {
    Name: "PRESTON",
    Address: "Arnold Hill Academy, Gedling Road  Nottingham. NG5 6NZ",
    Code: "",
    Contacts: "01772 727 819",
    "Types of pitches": " 7-A-Side 3G Pitch",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/preston",
  },
  {
    Name: "BLACKPOOL",
    Address: "Burnholme Sports Centre -  Bad  Bargain Ln  York. YO31 0GW",
    Code: "",
    Contacts: "01253 391 391",
    "Types of pitches": "6 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/blackpool",
  },
  {
    Name: "YORK ENERGISE",
    Address: "Bury College, Millennium Centre, Market Street Bury. BL9 0DB",
    Code: "",
    Contacts: "0333 577 4625",
    "Types of pitches": "3 x 7-A-Side Astro Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/york-energise",
  },
  {
    Name: "YORK",
    Address:
      " Tulketh Community Sports College, Tag Lane, Ingol Preston. PR2 3TX",
    Code: "",
    Contacts: "01904 238 230",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/york",
  },
  {
    Name: "SWINDON INDOOR",
    Address: "Garstang Road West Blackpool. FY3 7JH",
    Code: "",
    Contacts: "01793 297 233",
    "Types of pitches": "3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/swindon-indoor",
  },
  {
    Name: "LUTON",
    Address: " Cornlands Rd York. YO24 3DX",
    Code: "",
    Contacts: "01582 420 710",
    "Types of pitches": "6 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/luton",
  },
  {
    Name: "SWINDON CROFT",
    Address: "Stirling Road, Clifton Moor York. YO30 4TU",
    Code: "",
    Contacts: "0333 577 4628",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/swindon-croft",
  },
  {
    Name: "BRISTOL HORFIELD",
    Address: "Unit 29 Bramble Rd, Kembrey Park Swindon. SN2 8HB",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bristol-horfield",
  },
  {
    Name: "BRISTOL ST PAULS",
    Address: "Next to Stopsley High School, St Thomas's Road Luton. LU2 7UX",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "2 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bristol-st-pauls",
  },
  {
    Name: "WELWYN GARDEN CITY GOSLING",
    Address: "Croft Sports Centre, Marlborough Lane Swindon. SN3 1RA",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": "6 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/welwyn-garden-city-gosling",
  },
  {
    Name: "SWANSEA",
    Address: "Horfield Leisure Centre, Dorian Road, Horfield Bristol. BS7 0XW",
    Code: "",
    Contacts: "01792 487 230",
    "Types of pitches": "2 x 7-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/swansea",
  },
  {
    Name: "HATFIELD LEISURE CENTRE",
    Address:
      " St Paul's Community Sports Academy, Newfoundland Road St Paul's. BS2 9NH",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/hatfield-leisure-centre",
  },
  {
    Name: "EVREHAM SPORTS CENTRE",
    Address:
      " Gosling Sports Park, Stanborough Road Welwyn Garden City. AL8 6XE",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": " 2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/evreham-sports-centre",
  },
  {
    Name: "NEWCASTLE WALKER ACTIVITY DOME",
    Address: " 926 Llayngefelach Road, Tirdeunaw Swansea. SA5 7HR",
    Code: "",
    Contacts: "0333 577 4628",
    "Types of pitches": "10 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/newcastle-walker-activity-dome",
  },
  {
    Name: "BOURNEMOUTH SIR DAVID ENGLISH",
    Address: "Travellers Lane Hatfield. AL10 8TJ",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "3 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL":
      "https://www.playfootball.net/venues/bournemouth-sir-david-english",
  },
  {
    Name: "BOURNEMOUTH LITTLEDOWN",
    Address: "Swallow Street Iver . SL0 0HS",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "6 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bournemouth-littledown",
  },
  {
    Name: "GILLINGHAM",
    Address:
      "Walker Activity Dome, Wharrier Street Newcastle Upon Tyne. NE6 3BR",
    Code: "",
    Contacts: "01634 565 920",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/gillingham",
  },
  {
    Name: "PORTSMOUTH",
    Address: "Sir David English Sports Centre, East Way Bournemouth. BH8 9PZ",
    Code: "",
    Contacts: "02392 651 426",
    "Types of pitches": "7 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/portsmouth",
  },
  {
    Name: "BRIGHTON",
    Address: "Littledown Centre, Chaseside Bournemouth. BH7 7DX",
    Code: "",
    Contacts: "0333 733 5000",
    "Types of pitches": "3 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/brighton",
  },
  {
    Name: "OLD STREET",
    Address: "London Road, Rainham Gillingham. ME8 7RJ",
    Code: "",
    Contacts: "0333 577 4625",
    "Types of pitches": "4 x 6-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/old-street",
  },
  {
    Name: "HACKNEY WICK",
    Address: " 442 Copnor Road Portsmouth. PO3 5EW",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "6-A-Side 3G Pitch",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/hackney-wick",
  },
  {
    Name: "STRATFORD DRAPERS",
    Address: "Dorothy Stringer School, Loder Road Brighton. BN1 6PZ",
    Code: "",
    Contacts: "0333 577 4625",
    "Types of pitches": "3 x 7-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/stratford-drapers",
  },
  {
    Name: "COLCHESTER",
    Address: "Norman St London. EC1V 3PU",
    Code: "",
    Contacts: "01206 615 100",
    "Types of pitches": " 4 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/colchester",
  },
  {
    Name: "CHELSEA",
    Address: "Gainsborough Sports Pitch, East Bay Lane London. E15 2GW",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "2 x 5-A-Side Sand Based Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/chelsea",
  },
  {
    Name: "WHITECHAPEL",
    Address: "Drapers Field, 22 Gordon Road London. E15 2DD",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "6-A-Side 3G Pitch",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/whitechapel",
  },
  {
    Name: "WATERLOO",
    Address: "St Helena School, Sheepen Road Colchester. CO3 3LE",
    Code: "",
    Contacts: "0333 577 7874",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/waterloo",
  },
  {
    Name: "MILE END",
    Address: "Chelsea Sports Centre, Chelsea Manor Street London. SW3 5PL",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "4 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/mile-end",
  },
  {
    Name: "ELEPHANT & CASTLE",
    Address: "Whitechapel Sports Centre, 55 Durward Street London. E1 5BA",
    Code: "",
    Contacts: "0333 577 4625",
    "Types of pitches": "2 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/elephant-castle",
  },
  {
    Name: "ROMFORD",
    Address:
      " Archbishops Park, Lambeth Palace Road, Lambeth North London. SE1 7LQ",
    Code: "",
    Contacts: "01708 209 815",
    "Types of pitches": "7 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/romford",
  },
  {
    Name: "OVAL",
    Address: " 190 Burdett Rd, Mile End,London. E3 4HL",
    Code: "",
    Contacts: "0333 577 4626",
    "Types of pitches": "5-A-Side 3G Pitch",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/oval",
  },
  {
    Name: "BOURNEMOUTH PELHAMS",
    Address: "Globe Academy, Harper Road Southwark. SE1 6AG",
    Code: "",
    Contacts: " 0333 733 5000",
    "Types of pitches": "3 x 5-A-Side 3G Pitches",
    Email: "customer.care@playfootball.net",
    "Website URL": "https://www.playfootball.net/venues/bournemouth-pelhams",
  },
];
