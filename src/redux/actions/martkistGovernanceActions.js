import constants from '../constants';
import * as proposalService from '../../API/martkist/proposals.service';

export default {
  getMartkistGovernanceInfo: () => {
    return dispatch => {
      return dispatch(
        proposalService.getGovernanceInfo(constants.MARTK_GOVERNANCE_INFO)
      );
    };
  }
};
