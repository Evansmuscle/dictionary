export interface Meaning {
  partOfSpeech: string;
  definition: string;
  example: string;
}

export interface Word {
  word: string;
  audio: string;
  meanings: Meaning[];
}

export interface SearchInfo {
  info?: {
    word: string;
    phonetics: {
      test: string;
      audio: string;
    }[];
    meanings: {
      partOfSpeech: string;
      definitions: {
        definition: string;
        example: string;
        synonyms?: string[];
      }[];
    }[];
  };
}
