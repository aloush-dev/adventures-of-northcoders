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

export type EmptyUserSolution = {
  id: number;
  user: string;
  userId: number;
  timeOpened: Date;
  puzzleCollection: string;
  puzzleNumber: number;
  part_1_complete: boolean;
  part_2_complete: boolean;
  part_1_solution: number;
  part_2_solution: number;
  part_1_time_of_completion: Date;
  part_2_time_of_completion: Date;
};
