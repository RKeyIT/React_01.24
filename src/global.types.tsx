export enum PageNames {
  GAME = 'Game',
  HOME = 'Home',
  RESULT = 'Result',
  STATISTICS = 'Statistics'
}

export interface ISelectOption {
  id: string
  name: string
}

export interface IObjectWithOptions {
  [key: string]: ISelectOption
}

export const QuizCategories: IObjectWithOptions = Object.freeze({
  ANY: { id: 'any', name: 'Any Category' },
  GENERAL: { id: '9', name: 'General Knowledge' },
  EntBooks: { id: '10', name: 'Entertainment: Books' },
  EntFilms: { id: '11', name: 'Entertainment: Film' },
  EntMusic: { id: '12', name: 'Entertainment: Music' },
  EntMusicalsTheatres: { id: '13', name: 'Entertainment: Musicals & Theatres' },
  EntTelevision: { id: '14', name: 'Entertainment: Television' },
  EntVideoGames: { id: '15', name: 'Entertainment: Video Games' },
  EntBoardGames: { id: '16', name: 'Entertainment: Board Games' },
  ScienceNature: { id: '17', name: 'Science & Nature' },
  ScienceCoputers: { id: '18', name: 'Science: Computers' },
  ScienceMathematics: { id: '19', name: 'Science: Mathematics' },
  Mythology: { id: '20', name: 'Mythology' },
  Sports: { id: '21', name: 'Sports' },
  Geography: { id: '22', name: 'Geography' },
  History: { id: '23', name: 'History' },
  Politics: { id: '24', name: 'Politics' },
  Art: { id: '25', name: 'Art' },
  Celebrities: { id: '26', name: 'Celebrities' },
  Animals: { id: '27', name: 'Animals' },
  Vehicles: { id: '28', name: 'Vehicles' },
  EntComics: { id: '29', name: 'Entertainment: Comics' },
  ScienceGadgets: { id: '30', name: 'Science: Gadgets' },
  EntJapaneseAnimeManga: {
    id: '31',
    name: 'Entertainment: Japanese Anime & Manga'
  },
  EntCartoonAnimations: {
    id: '32',
    name: 'Entertainment: Cartoon & Animations'
  }
})

export const QuizDifficulties: IObjectWithOptions = Object.freeze({
  ANY: { id: 'any', name: 'Any Difficulty' },
  easy: { id: 'easy', name: 'Easy' },
  medium: { id: 'medium', name: 'Medium' },
  hard: { id: 'hard', name: 'Hard' }
})

export const QuizType: IObjectWithOptions = Object.freeze({
  ANY: { id: 'any', name: 'Any Type' },
  multiple: { id: 'multiple', name: 'Multiple Choice' },
  boolean: { id: 'boolean', name: 'True / False' }
})

export const QuizTime: IObjectWithOptions = Object.freeze({
  ANY: { id: 'any', name: 'Any Time' },
  one: { id: '1', name: 'One Minute' },
  two: { id: '2', name: 'Two Minutes' },
  five: { id: '5', name: 'Five Minutes' }
})

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
