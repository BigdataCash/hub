import { combineReducers } from 'redux';

//Reducer imports
import app from './appReducers';
import martkistStats from './martkistStatsReducers';
import proposals from './proposalReducers';
import mediumPosts from './mediumReducers';
import mnInfo from './mnInfoReducer';
import governance from './martkistGovernanceReducers';

export default combineReducers({
  app,
  martkistStats,
  proposals,
  mediumPosts,
  mnInfo,
  governance
});
