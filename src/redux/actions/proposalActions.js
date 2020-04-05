import constants from '../constants';
import * as proposalService from '../../API/martkist/proposals.service';

export default {
  getProposals: () => {
    return dispatch => {
      return dispatch(
        proposalService.getProposalList(constants.MARTK_PROPOSALS_GET)
      );
    };
  },

  checkProposal: params => {
    return dispatch => {
      return dispatch(
        proposalService.checkProposal(params, constants.MARTK_PROPOSALS_CHECK)
      );
    };
  },

  prepareProposal: params => {
    return dispatch => {
      return dispatch(
        proposalService.prepareProposal(params, constants.MARTK_PROPOSALS_PREPARE)
      );
    };
  },

  submitProposal: params => {
    return dispatch => {
      return dispatch(
        proposalService.submitProposal(params, constants.MARTK_PROPOSALS_SUBMIT)
      );
    };
  },

  voteOnProposal: params => {
    return dispatch => {
      return dispatch(
        proposalService.voteOnProposal(params, constants.MARTK_PROPOSAL_VOTE)
      );
    };
  }
};
