import constants from "../constants";

const initialState = {
  cards: [
    {
      img: "png_stasts_martkist.png",
      key: "changeRate",
      text: ["USD", "BTC", "Satoshi"]
    },
    {
      img: "png_stats_gov.png",
      key: "governance",
      text: [
        "Governance Status",
        [
          "Next Payout Date",
          "Block Height",
          "Voting Deadline",
          "Governance Available"
        ]
      ]
    },
    {
      img: "png_menu_masternodes_selected.png",
      key: "masternodes",
      text: ["Registered Masternodes"]
    },
    {
      img: "png_stats_users.png",
      key: "totUsers",
      text: ["Registered Users"]
    }
  ],
  totMn: 0,
  regMn: 0,
  users: 0
};

/*
Payout date,
Governance available,
Voting Deadline,
Active Proposals,
*/

function smartParse(json, def) {
  if (typeof json === "object") return json;
  try {
    return JSON.parse(json);
  } catch (e) {
    return def;
  }
}

const martkistStats = (state = initialState, action) => {
  switch (action.type) {
    case constants.MARTK_STATS_PRICE_GET: {
      const martkistPrice = smartParse(action.data, []);
      console.log("ACZ martkistPrice -->", martkistPrice);
      return { ...state, martkistPrice };
    }
    case constants.MARTK_STATS_TMN_GET: {
      return { ...state, mnCount: action.data };
    }
    case constants.MARTK_STATS_RMN_GET: {
      return { ...state, mnRegistered: action.data };
    }
    case constants.MARTK_STATS_USER_GET: {
      return { ...state, users: action.data };
    }
    default:
      return state;
  }
};

export default martkistStats;
