import FirstSection from "../components/pages/home/FirstSection";
import SecondSection from "../components/pages/home/SecondSection";
export default function HomePage() {
  return (
    <section className="flex-col items-center gap-8 flex w-full bg-amber-100">
      <FirstSection />
      <SecondSection />
    </section>
  );
}
