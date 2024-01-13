import { ProgressCard } from "./ProgressCard";

export const ProgressSummary = () => {
  const userSolutionsArray: {
    id: number;
    userId: number;
    timeOpened?: Date;
    day: number;
    puzzleName: string;
    part_1_complete: boolean;
    part_2_complete: boolean;
    part_1_solution?: number | null;
    part_2_solution?: number | null;
    part_1_time_of_completion?: Date | null;
    part_2_time_of_completion?: Date | null;
  }[] = [
    {
      id: 1,
      userId: 1,
      timeOpened: new Date("2022-01-01T08:00:00Z"),
      day: 1,
      puzzleName: "Puzzle 1",
      part_1_complete: true,
      part_2_complete: false,
      part_1_solution: 42,
      part_2_solution: null,
      part_1_time_of_completion: new Date("2022-01-01T10:30:00Z"),
      part_2_time_of_completion: null,
    },
    {
      id: 2,
      userId: 1,
      timeOpened: new Date("2022-01-02T09:00:00Z"),
      day: 2,
      puzzleName: "Puzzle 2",
      part_1_complete: false,
      part_2_complete: true,
      part_1_solution: null,
      part_2_solution: 73,
      part_1_time_of_completion: null,
      part_2_time_of_completion: new Date("2022-01-02T12:45:00Z"),
    },
    {
      id: 3,
      userId: 1,
      timeOpened: new Date("2022-01-03T08:30:00Z"),
      day: 3,
      puzzleName: "Puzzle 3",
      part_1_complete: true,
      part_2_complete: true,
      part_1_solution: 56,
      part_2_solution: 91,
      part_1_time_of_completion: new Date("2022-01-03T11:15:00Z"),
      part_2_time_of_completion: new Date("2022-01-03T15:20:00Z"),
    },
    {
      id: 4,
      userId: 1,
      timeOpened: new Date("2022-01-04T10:45:00Z"),
      day: 4,
      puzzleName: "Puzzle 4",
      part_1_complete: false,
      part_2_complete: false,
      part_1_solution: null,
      part_2_solution: null,
      part_1_time_of_completion: null,
      part_2_time_of_completion: null,
    },
    {
      id: 5,
      userId: 1,
      timeOpened: new Date("2022-01-05T11:30:00Z"),
      day: 5,
      puzzleName: "Puzzle 5",
      part_1_complete: true,
      part_2_complete: false,
      part_1_solution: 78,
      part_2_solution: null,
      part_1_time_of_completion: new Date("2022-01-05T14:15:00Z"),
      part_2_time_of_completion: null,
    },
    {
      id: 6,
      userId: 1,
      timeOpened: new Date("2022-01-06T09:15:00Z"),
      day: 6,
      puzzleName: "Puzzle 6",
      part_1_complete: false,
      part_2_complete: false,
      part_1_solution: null,
      part_2_solution: null,
      part_1_time_of_completion: null,
      part_2_time_of_completion: null,
    },
    {
      id: 7,
      userId: 1,
      timeOpened: new Date("2022-01-07T12:00:00Z"),
      day: 7,
      puzzleName: "Puzzle 7",
      part_1_complete: true,
      part_2_complete: true,
      part_1_solution: 62,
      part_2_solution: 84,
      part_1_time_of_completion: new Date("2022-01-07T15:30:00Z"),
      part_2_time_of_completion: new Date("2022-01-07T18:45:00Z"),
    },
    {
      id: 8,
      userId: 1,
      timeOpened: new Date("2022-01-08T08:45:00Z"),
      day: 8,
      puzzleName: "Puzzle 8",
      part_1_complete: false,
      part_2_complete: true,
      part_1_solution: null,
      part_2_solution: 97,
      part_1_time_of_completion: null,
      part_2_time_of_completion: new Date("2022-01-08T11:20:00Z"),
    },
    {
      id: 9,
      userId: 1,
      timeOpened: new Date("2022-01-09T11:15:00Z"),
      day: 9,
      puzzleName: "Puzzle 9",
      part_1_complete: true,
      part_2_complete: false,
      part_1_solution: 53,
      part_2_solution: null,
      part_1_time_of_completion: new Date("2022-01-09T13:40:00Z"),
      part_2_time_of_completion: null,
    },
    {
      id: 10,
      userId: 1,
      timeOpened: new Date("2022-01-10T09:30:00Z"),
      day: 10,
      puzzleName: "Puzzle 10",
      part_1_complete: true,
      part_2_complete: true,
      part_1_solution: 72,
      part_2_solution: 88,
      part_1_time_of_completion: new Date("2022-01-10T13:00:00Z"),
      part_2_time_of_completion: new Date("2022-01-10T15:25:00Z"),
    },
  ];

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {userSolutionsArray.map((solution) => {
        return <ProgressCard key={solution.id} solution={solution} />;
      })}
    </div>
  );
};
