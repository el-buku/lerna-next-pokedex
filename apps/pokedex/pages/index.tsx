import { Header } from "pokedex-components";
import { Logger } from "pokedex-utils";

export default function Home() {
  Logger();
  return (
    <>
      <Header />
      <div>pokedex index</div>
    </>
  );
}
