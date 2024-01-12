import { PuzzleMain } from "../../_components/puzzle/PuzzleMain";
import { HintButton } from "../../_components/puzzle/HintButton";

export default async function PuzzlePage() {
  const hints = [
    {
      keyword: "consectetur",
      smallHint: "THIS IS THE SMALL HINT TEXT consectetur",
      hintLink: "https://en.wikipedia.org/wiki/David_Cameron",
      component: (
        <HintButton
          hint={{
            keyword: "consectetur",
            smallHint: "THIS IS THE SMALL HINT TEXT consectetur",
            hintLink: "https://en.wikipedia.org/wiki/David_Cameron",
          }}
        >
          consectetur
        </HintButton>
      ),
    },
    {
      keyword: "sollicitudin",
      smallHint: "THIS IS THE SMALL HINT TEXT sollicitudin",
      hintLink: "https://en.wikipedia.org/wiki/David_Cameron",
      slug: "",
      component: (
        <HintButton
          hint={{
            keyword: "sollicitudin",
            smallHint: "THIS IS THE SMALL HINT TEXT sollicitudin",
            hintLink: "https://en.wikipedia.org/wiki/David_Cameron",
          }}
        >
          sollicitudin
        </HintButton>
      ),
    },
  ];
  const puzzleInfo = {
    id: 1,
    name: "First Puzzle",
    slug: "first-puzzle",
    p1Description: `Part 1 Lorem ipsum dolor sit amet, &&consectetur&& adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et &&sollicitudin&& ac orci phasellus egestas. Mattis rhoncus urna neque viverra justo. Vel facilisis volutpat est velit egestas dui id ornare. Eget dolor morbi non arcu. Consectetur a erat nam at lectus urna. Varius quam quisque id diam vel. &&Lacinia&& quis vel eros donec ac odio tempor. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Vitae purus faucibus ornare suspendisse sed. Nec ultrices dui sapien eget mi proin sed libero enim. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Quam pellentesque nec nam aliquam sem et tortor. Facilisis gravida neque convallis a cras semper auctor. Ornare arcu dui vivamus arcu felis bibendum. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Erat pellentesque adipiscing commodo elit at imperdiet dui. Eget nulla facilisi etiam dignissim diam.

    Pellentesque pulvinar pellentesque habitant morbi tristique. Cursus risus at ultrices mi tempus. Augue ut lectus arcu bibendum. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Integer enim neque volutpat ac. Ultricies integer quis auctor elit sed vulputate mi sit. Pharetra pharetra massa massa ultricies mi. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor.`,
    p2Description: `Part 2 Discription Pellentesque consequat, nibh ac facilisis tempus, lacus ex blandit augue, non porttitor tellus justo vitae sapien. Sed id
  pellentesque nisl, et consectetur nulla. Nullam dictum, enim ut
  scelerisque condimentum, risus lectus tempor arcu, non varius tellus
  magna id augue.`,
  };

  return <PuzzleMain hints={hints} puzzleInfo={puzzleInfo} />;
}
