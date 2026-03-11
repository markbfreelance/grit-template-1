import Cta_Merch from "./sections/cta_merch";
import Featured_Merch from "./sections/featured_merch";
import Grid_Merch from "./sections/grid_merch";
import Hero_Merch from "./sections/hero_merch";

export default function MerchPage() {
  return (
    <main className="bg-[#0e132b]">
      <Hero_Merch />
      <Featured_Merch />
      <Grid_Merch />
      <Cta_Merch />
    </main>
  );
}
