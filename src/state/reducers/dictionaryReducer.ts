import { Reducer } from 'redux';
import { AppState } from '../../types';
import { Actions } from '../action-creators';
import { ActionTypes } from '../action-types';

const initialState: AppState = {
  wordInfo: [
    {
      info: {
        word: '',
        meanings: [
          {
            partOfSpeech: '',
            definitions: [
              {
                definition: '',
                example: '',
                synonyms: [''],
              },
            ],
          },
        ],
        phonetics: [
          {
            text: '',
            audio: '',
          },
        ],
      },
    },
  ],
  searchWord: '',
  language: 'en',
};

const dictionaryReducer: Reducer<AppState, Actions> = (
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.LANGUAGE_SELECT:
      return { ...state, language: action.payload };

    case ActionTypes.ENTER_WORD:
      return { ...state, searchWord: action.payload };

    case ActionTypes.SEARCH_ACTION:
      return { ...state, wordInfo: action.payload };

    default:
      return state;
  }
};

export default dictionaryReducer;
