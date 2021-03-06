import Author from "../types/author";
import Avatar from "./avatar";

type Props = {
  author: Author
}

const introLottery = [
  "Sometimes I like to write whatever it is I'm thinking about.",
  "Have we met before?",
  "blog",
  "Please, call me Ron"
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Intro = ({ author }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Occasionally.
        </h1>
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        { introLottery[getRandomInt(introLottery.length)] }
      </h4>
    </section>
  )
}

export default Intro
