import type { NextPage } from "next";
import { Header } from "web/components/header";

import { AboutMeSection } from "./components/about-me-section";
import { SkillsSection } from "./components/skills-section";
import { WhoAmISection } from "./components/who-am-i-section";

export const Home: NextPage = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col gap-56 mt-10 mx-4 md:mx-16">
				<WhoAmISection />
				<SkillsSection />
				<AboutMeSection />
				<div>In development</div>
			</main>
		</>
	);
};
