import FirstSection from '../components/pages/home/FirstSection';
import SecondSection from '../components/pages/home/SecondSection';
export default function HomePage() {
	return (
		<section className="flex w-full flex-col items-center gap-8">
			<FirstSection />
			<SecondSection />
		</section>
	);
}
