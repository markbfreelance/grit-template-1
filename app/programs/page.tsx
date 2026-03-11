import AgeGroups_Programs from "./sections/agegroup_programs";
import Cta_Programs from "./sections/cta_programs";
import Grid_Programs from "./sections/grid_programs";
import Hero_Programs from "./sections/hero_programs";
import HowItWorks_Programs from "./sections/howitworks_programs";

export default function ProgramsPage() {
  return (
    <main className="bg-[#0e132b]">
      <Hero_Programs />
      <Grid_Programs />
      <HowItWorks_Programs />
      <AgeGroups_Programs />
      <Cta_Programs />
    </main>
  );
}
