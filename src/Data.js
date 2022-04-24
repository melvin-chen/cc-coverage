export const BANKS = {
  CHASE: "Chase",
  AMEX: "American Express",
  CAPITAL_ONE: "Captial One",
  CITI: "Citi",
  DISCOVER: "Discover",
  OTHER: "Other",
};

export const REWARD_TYPES = {
  CASH_BACK: { name: "Cash Back", associatedColor: "#51ec5138" },
  UR: { name: "Chase Ultimate Rewards Points", associatedColor: "#2e9eff36" },
  MR: { name: "Amex Membership Rewards Points", associatedColor: "#ffbd1e3d" },
  COM: { name: "Capital One Miles", associatedColor: "#6800ff26" },
  TYP: { name: "Citi Thank You Points", associatedColor: "#c6c6c64f" },
};

export const CATEGORIES = {
  DINING: { displayName: "Dining", cardsInCategory: new Set() },
  GROCERY: { displayName: "Grocery", cardsInCategory: new Set() },
  GROCERY_ONLINE: {
    displayName: "Grocery (Online)",
    cardsInCategory: new Set(),
  },
  DRUGSTORE: {
    displayName: "Drugstore",
    cardsInCategory: new Set(),
  },
  STREAMING: {
    displayName: "Streaming",
    cardsInCategory: new Set(),
  },
  GAS: { displayName: "Gas", cardsInCategory: new Set() },
  TRANSIT: { displayName: "Transit", cardsInCategory: new Set() },
  TRAVEL_GENERAL: {
    displayName: "Travel (General)",
    cardsInCategory: new Set(),
  },
  TRAVEL_CHASE_HOTELS: {
    displayName: "Travel - Hotels (Chase)",
    cardsInCategory: new Set(),
  },
  TRAVEL_CHASE_FLIGHTS: {
    displayName: "Travel - Flights (Chase)",
    cardsInCategory: new Set(),
  },
  TRAVEL_CO_HOTELS: {
    displayName: "Travel - Hotels (Capital One)",
    cardsInCategory: new Set(),
  },
  TRAVEL_CO_FLIGHTS: {
    displayName: "Travel - Flights (Capital One)",
    cardsInCategory: new Set(),
  },
};

const CARDS = [
  {
    cardName: "Freedom Unlimited",
    bank: BANKS.CHASE,
    id: "chase-freedom-unlimited",
    annualFee: 0,
    rewardType: REWARD_TYPES.UR,
    categories: {
      TRAVEL_CHASE_HOTELS: 0.05,
      TRAVEL_CHASE_FLIGHTS: 0.05,
      DINING: 0.03,
      DRUGSTORE: 0.03,
      all: 0.015,
    },
  },
  {
    cardName: "Sapphire Preferred",
    bank: BANKS.CHASE,
    id: "chase-sapphire-preferred",
    annualFee: 95,
    rewardType: REWARD_TYPES.UR,
    categories: {
      TRAVEL_CHASE_HOTELS: 0.05,
      TRAVEL_CHASE_FLIGHTS: 0.05,
      TRAVEL_GENERAL: 0.02,
      DINING: 0.03,
      STREAMING: 0.03,
      GROCERY_ONLINE: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Sapphire Reserve",
    bank: BANKS.CHASE,
    id: "chase-sapphire-reserve",
    rewardType: REWARD_TYPES.UR,
    annualFee: 550,
    categories: {
      TRAVEL_CHASE_HOTELS: 0.1,
      TRAVEL_CHASE_FLIGHTS: 0.05,
      TRAVEL_GENERAL: 0.03,
      DINING: 0.03,
      STREAMING: 0.03,
      GROCERY_ONLINE: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Blue Cash Preferred",
    bank: BANKS.AMEX,
    id: "amex-blue-cash-preferred",
    rewardType: REWARD_TYPES.CASH_BACK,
    annualFee: 95,
    categories: {
      GROCERY: 0.06,
      STREAMING: 0.06,
      TRANSIT: 0.03,
      GAS: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Blue Cash Everyday",
    bank: BANKS.AMEX,
    id: "amex-blue-cash-everyday",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      GROCERY: 0.03,
      GAS: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Cash Magnet",
    bank: BANKS.AMEX,
    id: "amex-cash-magnet",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      all: 0.015,
    },
  },
  {
    cardName: "Green",
    bank: BANKS.AMEX,
    id: "amex-green",
    annualFee: 150,
    rewardType: REWARD_TYPES.MR,
    categories: {
      TRAVEL_GENERAL: 0.03,
      TRANSIT: 0.03,
      DINING: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Gold",
    bank: BANKS.AMEX,
    id: "amex-gold",
    annualFee: 150,
    rewardType: REWARD_TYPES.MR,
    categories: {
      TRAVEL_GENERAL: 0.03,
      GROCERY: 0.04,
      DINING: 0.04,
      all: 0.01,
    },
  },
  {
    cardName: "Platinum",
    bank: BANKS.AMEX,
    id: "amex-platinum",
    annualFee: 150,
    rewardType: REWARD_TYPES.MR,
    categories: {
      TRAVEL_GENERAL: 0.05,
      all: 0.01,
    },
  },
  {
    cardName: "Venture X",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-vx",
    annualFee: 395,
    rewardType: REWARD_TYPES.COM,
    categories: {
      TRAVEL_CO_HOTELS: 0.1,
      TRAVEL_CO_FLIGHTS: 0.05,
      all: 0.02,
    },
  },
  {
    cardName: "Venture",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-v",
    annualFee: 95,
    rewardType: REWARD_TYPES.COM,
    categories: {
      TRAVEL_CO_HOTELS: 0.05,
      all: 0.02,
    },
  },
  {
    cardName: "Venture One",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-vo",
    annualFee: 0,
    rewardType: REWARD_TYPES.COM,
    categories: {
      TRAVEL_CO_HOTELS: 0.05,
      all: 0.0125,
    },
  },
  {
    cardName: "Quicksilver",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-quicksilver",
    annualFee: 150,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      all: 0.015,
    },
  },
  {
    cardName: "Savor",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-savor",
    annualFee: 95,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      DINING: 0.04,
      STREAMING: 0.04,
      GROCERY: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "SavorOne",
    bank: BANKS.CAPITAL_ONE,
    id: "capital-one-so",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      DINING: 0.03,
      STREAMING: 0.03,
      GROCERY: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Citi Premier",
    bank: BANKS.CITI,
    id: "citi-premier",
    annualFee: 95,
    rewardType: REWARD_TYPES.TYP,
    categories: {
      DINING: 0.03,
      TRAVEL_GENERAL: 0.03,
      GAS: 0.03,
      GROCERY: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Citi Double Cash",
    bank: BANKS.CITI,
    id: "citi-dc",
    annualFee: 0,
    rewardType: REWARD_TYPES.TYP,
    categories: {
      all: 0.02,
    },
  },
  {
    cardName: "Citi Custom Cash",
    bank: BANKS.CITI,
    id: "citi-cc",
    annualFee: 0,
    rewardType: REWARD_TYPES.TYP,
    categories: {
      all: 0.01,
    },
  },
  {
    cardName: "Costco Anywhere",
    bank: BANKS.CITI,
    id: "citi-costco",
    annualFee: 60,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      GAS: 0.04,
      TRAVEL_GENERAL: 0.03,
      DINING: 0.03,
      all: 0.01,
    },
  },
  {
    cardName: "Apple Card (with apple pay)",
    bank: BANKS.OTHER,
    id: "other-apple",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      all: 0.02,
    },
  },
  {
    cardName: "US Bank Altitude Go",
    bank: BANKS.OTHER,
    id: "other-usb-altitude-go",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      DINING: 0.04,
      GROCERY: 0.02,
      GAS: 0.02,
      STREAMING: 0.02,
      all: 0.01,
    },
  },
  {
    cardName: "Discover it Chrome",
    bank: BANKS.DISCOVER,
    id: "other-discover-chrome",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      DINING: 0.02,
      GAS: 0.02,
      all: 0.01,
    },
  },
  {
    cardName: "Discover it Miles",
    bank: BANKS.DISCOVER,
    id: "other-discover-miles",
    annualFee: 0,
    rewardType: REWARD_TYPES.CASH_BACK,
    categories: {
      all: 0.015,
    },
  },
];

const CHASE_CARDS = CARDS.filter((card) => card.bank === BANKS.CHASE);
const AMEX_CARDS = CARDS.filter((card) => card.bank === BANKS.AMEX);
const CAPITAL_ONE_CARDS = CARDS.filter(
  (card) => card.bank === BANKS.CAPITAL_ONE
);
const CITI_CARDS = CARDS.filter((card) => card.bank === BANKS.CITI);
const DISCOVER_CARDS = CARDS.filter((card) => card.bank === BANKS.DISCOVER);
const OTHER_CARDS = CARDS.filter((card) => card.bank === BANKS.OTHER);

export const ALL_CARDS = {
  chase: { displayName: "Chase", cards: CHASE_CARDS },
  amex: { displayName: "American Express", cards: AMEX_CARDS },
  capitalOne: { displayName: "Capital One", cards: CAPITAL_ONE_CARDS },
  citi: { displayName: "Citi", cards: CITI_CARDS },
  discover: { displayName: "Discover", cards: DISCOVER_CARDS },
  other: { displayName: "Other", cards: OTHER_CARDS },
};
