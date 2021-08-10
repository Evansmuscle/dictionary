import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { SearchInfo } from '../../types';
import { axiosInstance } from '../../utils/axios/dictionary';
import { ActionTypes } from '../action-types';

export interface SearchAction {
  type: ActionTypes.SEARCH_ACTION;
  payload: SearchInfo[];
}

export const search =
  (searchWord: string, language: string) =>
  async (dispatch: Dispatch<SearchAction>) => {
    const results: AxiosResponse<SearchInfo[]> = await axiosInstance.get(
      `/${language}/${searchWord}`
    );
    dispatch({
      type: ActionTypes.SEARCH_ACTION,
      payload: results.data,
    });
  };
