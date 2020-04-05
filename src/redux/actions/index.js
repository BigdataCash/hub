import appActions from './appActions';
import martkistStatsActions from './martkistStatsActions';
import proposalActions from './proposalActions';
import mediumActions from './mediumActions';
import martkistGovernanceActions from './martkistGovernanceActions';

export default {
  ...appActions,
  ...martkistStatsActions,
  ...proposalActions,
  ...mediumActions,
  ...martkistGovernanceActions
};
