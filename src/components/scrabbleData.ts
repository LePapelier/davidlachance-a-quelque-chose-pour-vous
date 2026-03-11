export interface ScrabbleLetterData {
  letter: string;
  value: number;
}

export const scrabbleLetters: ScrabbleLetterData[] = [
  { letter: 'A', value: 1 }, { letter: 'B', value: 3 }, { letter: 'C', value: 3 },
  { letter: 'D', value: 2 }, { letter: 'E', value: 1 }, { letter: 'F', value: 4 },
  { letter: 'G', value: 2 }, { letter: 'H', value: 4 }, { letter: 'I', value: 1 },
  { letter: 'J', value: 8 }, { letter: 'K', value: 10 }, { letter: 'L', value: 1 },
  { letter: 'M', value: 2 }, { letter: 'N', value: 1 }, { letter: 'O', value: 1 },
  { letter: 'P', value: 3 }, { letter: 'Q', value: 8 }, { letter: 'R', value: 1 },
  { letter: 'S', value: 1 }, { letter: 'T', value: 1 }, { letter: 'U', value: 1 },
  { letter: 'V', value: 4 }, { letter: 'W', value: 10 }, { letter: 'X', value: 10 },
  { letter: 'Y', value: 10 }, { letter: 'Z', value: 10 }, { letter: '★', value: 0 },
];

export const frenchScrabbleValues: Record<string, number> = Object.fromEntries(
  scrabbleLetters.map(({ letter, value }) => [letter, value])
);
