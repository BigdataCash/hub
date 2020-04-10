import { HTTPAsync } from "../../redux/helpers";
import axios from "axios";

/**---------------------------------------------------------------------------- */
/** TO CHANGE THE URL FOR THE API DO IT IN ".env -> REACT_APP_MARTK_MN_API"       */
/**---------------------------------------------------------------------------- */

const baseApiURL = process.env.REACT_APP_MARTK_MN_API;

/**---------------------------------------------------------------------------- */

const PROVIDERS = {
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