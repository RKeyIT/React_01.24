export enum PageNames {
  GAME = 'Game',
  HOME = 'Home',
  RESULT = 'Result',
  STATISTICS = 'Statistics'
}

export interface ITableRow {
  category: string
  description: string | number
}

export type QuestionType = 'boolean' | 'multiple'
export type DifficultyType = 'easy' | 'medium' | 'hard'

export interface ICollectionActionPayloadItem {
  type: QuestionType
  difficulty: DifficultyType
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface ISelectOption {
  id: string
  name: string
}

export interface IObjectWithOptions {
  [key: string]: ISelectOption
}

// export type QuizCategoriesIDs = keyof typeof QuizCategories;
// export type QuizCategoriesNames = IObjectWithOptions[QuizCategoriesIDs]['name'];

// export type QuizDifficultiesIDs = keyof typeof QuizDifficulties;
// export type QuizDifficultiesNames = IObjectWithOptions[QuizDifficultiesIDs]['name'];

// export type QuizTypeIDs = keyof typeof QuizType;
// export type QuizTypeNames = IObjectWithOptions[QuizTypeIDs]['name'];

// export type QuizTimeIDs = keyof typeof QuizTime;
// export type QuizTimeNames = IObjectWithOptions[QuizTimeIDs]['name'];

// QuizCategories
// QuizDifficulties
// QuizType
// QuizTime

// export enum QuizCategoriesIDs {
//   GENERAL = 9,
//   EntertBooks,
//   EntertFilm,
//   EntertMusic,
//   EntertMusicalsTheatres,
//   EntertTelevision,
//   EntertVideoGames,
//   EntertBoardGames,
//   ScienceNature,
//   ScienceComputers,
//   ScienceMathematics,
//   Mythology,
//   Sports,
//   Geography,
//   History,
//   Politics,
//   Art,
//   Celebrities,
//   Animals,
//   Vehicles,
//   EntertComics,
//   ScienceGadgets,
//   EntertJapaneseAnimeManga,
//   EntertCartoonAnimations,
// }
//
// export enum QuizDifficultyEnum {
//   ANY = 'any',
//   EASY = 'easy',
//   MEDIUM = 'medium',
//   HARD = 'hard'
// }
//
// export enum QuizTypeEnum {
//   ANY = 'any',
//   MULTIPLE = 'multiple',
//   BOOLEAN = 'boolean'
// }

// export type QuizTimeForAnswerType = 1 | 2 | 5
