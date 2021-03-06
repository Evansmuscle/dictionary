import { AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../..';
import { SearchInfo } from '../../types';
import { axiosInstance } from '../../utils/axios/dictionary';
import { ActionTypes } from '../action-types';

export interface WordEnterAction {
  type: ActionTypes.ENTER_WORD;
  payload: string;
}

export interface LanguageSelectAction {
  type: ActionTypes.LANGUAGE_SELECT;
  payload: string;
}

export interface SearchAction {
  type: ActionTypes.SEARCH_ACTION;
  payload: SearchInfo[];
}

export interface SetDarkModeAction {
  type: ActionTypes.SET_DARK_MODE;
  payload: boolean;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  SearchAction
>;

export type Actions =
  | WordEnterAction
  | LanguageSelectAction
  | SearchAction
  | SetDarkModeAction;

export const search =
  (searchWord: string, language: string): AppThunk =>
  async (dispatch: Dispatch<SearchAction>) => {
    const results: AxiosResponse<SearchInfo[]> = await axiosInstance.get(
      `/${language}/${searchWord}`
    );
    dispatch({
      type: ActionTypes.SEARCH_ACTION,
      payload: results.data,
    });
  };

export const enterWord = (enteredWord: string): WordEnterAction => {
  return {
    type: ActionTypes.ENTER_WORD,
    payload: enteredWord,
  };
};

export const languageSelected = (language: string): LanguageSelectAction => {
  return {
    type: ActionTypes.LANGUAGE_SELECT,
    payload: language,
  };
};

export const setDarkMode = (on: boolean): SetDarkModeAction => {
  return {
    type: ActionTypes.SET_DARK_MODE,
    payload: on,
  };
};
