interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
    synonyms?: string[];
  }[];
}

interface Phonetics {
  test: string;
  audio: string;
}

export interface SearchInfo {
  info?: {
    word?: string;
    phonetics?: Phonetics[];
    meanings?: Meaning[];
  };
}

export type AppState = {
  wordInfo: SearchInfo[];
  searchWord: string;
  language: string;
};
