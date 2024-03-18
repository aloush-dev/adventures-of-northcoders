export type Puzzle = {
  UserSolution: {
    part_1_complete: boolean;
    part_2_complete: boolean;
    timeOpened: Date;
  }[];
} & {
  collection: string;
  puzzleNumber: number;
  openedCount: number;
  puzzleName: string;
};

