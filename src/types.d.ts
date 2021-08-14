interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example: string;
    synonyms: string[];
  }[];
}

interface Phonetics {
  text: string;
  audio: string;
}

export interface SearchInfo {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
}

export type AppState = {
  wordInfo: SearchInfo[];
  searchWord: string;
  language: string;
  darkMode: boolean;
};
