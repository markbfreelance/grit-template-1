import Cta_About from "./sections/cta_about";
import Hero_About from "./sections/hero_about";
import Stats_About from "./sections/stats_about";
import Story_About from "./sections/story_about";
import Team_About from "./sections/team_about";
import Values_About from "./sections/values_about";

export default function About() {
  return (
    <main>
      <Hero_About />
      <Story_About />
      <Stats_About />
      <Values_About />
      <Team_About />
      <Cta_About />
    </main>
  );
}
