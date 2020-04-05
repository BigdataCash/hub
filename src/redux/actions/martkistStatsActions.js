import constants from "../constants";
import * as mnService from "../../API/martkist/masternodes.service";
import * as martkService from "../../API/martkistTiker/martkistTiker.service";

export default {
  getMartkistMnRegistered: mnRegistered => {
    return dispatch =>
      dispatch({
        type: constants.MARTK_STATS_RMN_GET,
        data: mnRegistered
      });
  },

  getMartkistUserRegistered: userRegistered => {
    return dispatch =>
      dispatch({
        type: constants.MARTK_STATS_USER_GET,
        data: userRegistered
      });
  },

  getMartkistPrice: () => {
    return dispatch => {
      return dispatch(martkService.getMartkistPrice(constants.MARTK_STATS_PRICE_GET));
    };
  },

  getMartkistMnCount: () => {
    return dispatch => {
      return dispatch(mnService.getMnCount(constants.MARTK_STATS_TMN_GET));
    };
  }
};
