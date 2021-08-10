import { SearchInfo } from '../../types';
import { SearchAction } from '../action-creators';
import { ActionTypes } from '../action-types';

export const searchReducer = (
  state: SearchInfo[] = [],
  action: SearchAction
) => {
  switch (action.type) {
    case ActionTypes.SEARCH_ACTION:
      return { ...state };
    default:
      return state;
  }
};
