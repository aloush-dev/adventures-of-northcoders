import React from "react";
import { PuzzleInputBox } from "./PuzzleInputBox";
import { PuzzleSubmitButton } from "./PuzzleSubmitButton";
import { IoSend } from "react-icons/io5";

export default function PuzzleMain() {
  return (
    <div>
      <h2 className="py-4 text-4xl font-extrabold tracking-tight">
        Puzzle Title
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
        lobortis dolor, non pretium neque ullamcorper at. Aliquam tincidunt
        dapibus tortor dictum pulvinar. Sed et vestibulum risus. Nam eros metus,
        interdum sed hendrerit id, pretium id lacus. Mauris sollicitudin nulla
        vitae nulla sollicitudin, vel finibus dui facilisis. Nunc euismod rutrum
        arcu, vitae tincidunt metus aliquam et. Pellentesque consequat, nibh ac
        facilisis tempus, lacus ex blandit augue, non porttitor tellus justo
        vitae sapien. Sed id pellentesque nisl, et consectetur nulla. Nullam
        dictum, enim ut scelerisque condimentum, risus lectus tempor arcu, non
        varius tellus magna id augue. Donec in enim erat. Etiam ut ligula ac est
        laoreet molestie sit amet ac eros. Aliquam eu lorem nec nisi congue
        vehicula nec et sem. Nunc venenatis sollicitudin ultrices. Vestibulum
        eget ullamcorper mi. Proin consectetur placerat laoreet. Aenean in
        pulvinar tellus, at lacinia purus. Etiam enim quam, cursus ac dolor at,
        posuere rhoncus dolor. Duis mattis lectus ligula. Etiam placerat
        lobortis elit, quis consequat nisi. Phasellus tincidunt lorem non
        pellentesque bibendum.
      </p>
      <div className="my-8 flex">
        <PuzzleInputBox />
        <PuzzleSubmitButton>
          Submit
          <div className="px-2 text-xl">
            <IoSend />
          </div>
        </PuzzleSubmitButton>
      </div>
    </div>
  );
}
