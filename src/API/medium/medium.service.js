import { HTTPAsync } from '../../redux/helpers';

/**---------------------------------------------------------------------------- */
/** TO CHANGE THE URL FOR THE API DO IT IN ".env -> REACT_APP_MARTK_MN_API"       */
/**---------------------------------------------------------------------------- */

const baseApiURL = process.env.REACT_APP_MARTK_MN_API;

/**---------------------------------------------------------------------------- */

export const getMediumUserPosts = user => {
  return HTTPAsync.onlyGet(`${baseApiURL}/feed`, null);
};
