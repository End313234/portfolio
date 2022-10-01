import type { NextPage } from "next";
import { Header } from "web/components/header";

import { AboutMeSection } from "./components/about-me-section";

export const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col gap-56">
				<AboutMeSection />
			</main>
		</>
	);
};
