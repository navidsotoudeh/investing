import HeroBox from "../components/pages/home/HeroBox";
import SecondBox from "../components/pages/home/SecondBox";
export default function HomePage() {
  return (
    <section className="flex-col items-center gap-8 flex w-2/3">
      <HeroBox />
      <SecondBox />
    </section>
  );
}
