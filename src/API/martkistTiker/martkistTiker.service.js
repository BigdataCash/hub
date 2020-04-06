import { HTTPAsync } from "../../redux/helpers";
import axios from "axios";

/**---------------------------------------------------------------------------- */
/** TO CHANGE THE URL FOR THE API DO IT IN ".env -> REACT_APP_MARTK_MN_API"       */
/**---------------------------------------------------------------------------- */

const baseApiURL = process.env.REACT_APP_MARTK_MN_API;

/**---------------------------------------------------------------------------- */

const PROVIDERS = {
  coinmarketcap: `${baseApiURL}/curl?url="https://api.coinmarketcap.com/v1/ticker/martkist/"`,
  coingecko:
    "https://api.coingecko.com/api/v3/coins/martkist?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false",
  api:
    `${baseApiURL}/ticker`
};

const activeProvider = "api";

export const getMartkistPrice = actionType => {
  return apiFetcher(`${PROVIDERS[activeProvider]}`, null, actionType);
};

const apiFetcher = (url, params, actionType) => {
  return dispatch =>
    axios
      .get(url, params)
      .then(response => {
        return response.data;
      })
      .then(data => {
        if (actionType != null) {
          dispatch({
            type: actionType,
            data
          });
        }
        return data;
      })
      .catch(err => {
        throw err;
      })
};


const coingeckoFetcher = (url, params, actionType) => {
  return dispatch =>
    axios
      .get(url, params)
      .then(response => {
        return response.data;
      })
      .then(data => {
        const {
          current_price: { usd, btc },
          price_change_percentage_24h,
          price_change_percentage_1h,
          price_change_percentage_7d
        } = data.market_data;

        console.log("ACZ data -->", data);
        if (actionType != null) {
          dispatch({
            type: actionType,
            data: {
              usd,
              btc,
              price_change_percentage_24h,
              price_change_percentage_1h,
              price_change_percentage_7d
            }
          });
        }
        return data;
      })
      .catch(err => {
        throw err;
      });
};