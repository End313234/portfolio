import type { FC } from "react";
import type { Skill } from "types";

import { SkillsSectionCard } from "./card";

export const SkillsSection: FC = () => {
	const skills: Array<Skill> = [
		{
			imageSource: "/css.svg",
			imageAlt: "CSS's logo",
			title: "CSS",
			progress: 80,
			color: "#0e7490",
		},
		{
			imageSource: "/typescript.svg",
			imageAlt: "TypeScript's logo",
			title: "TypeScript",
			progress: 100,
			color: "#3b82f6",
		},
		{
			imageSource: "/react.svg",
			imageAlt: "React's logo",
			title: "ReactJS",
			progress: 80,
			color: "#0891b2",
		},
		{
			imageSource: "/golang.svg",
			imageAlt: "Go's logo",
			title: "GoLang",
			progress: 80,
			color: "#06b6d4",
		},
		{
			imageSource: "/mongodb.svg",
			imageAlt: "MongoDB's logo",
			title: "MongoDB",
			progress: 100,
			color: "#16a34a",
		},
		{
			imageSource: "/nodejs.svg",
			imageAlt: "NodeJS's logo",
			title: "NodeJS",
			progress: 90,
			color: "#22c55e",
		},
		{
			imageSource: "/sass.svg",
			imageAlt: "Sass's logo",
			title: "Sass",
			progress: 95,
			color: "#db2777",
		},
		{
			imageSource: "/git.svg",
			imageAlt: "Git's logo",
			title: "Git",
			progress: 95,
			color: "#dc2626",
		},
	];

	return (
		<section id="skills" className="flex items-center justify-center">
			<div className="flex items-center justify-center flex-col gap-14 w-screen max-w-screen-lg">
				<h1>Minhas skills</h1>
				<div className="flex gap-20 max-w-2xl pb-8 pt-2 overflow-x-scroll items-center justify-center lg:w-[90vw] lg:max-w-screen-lg">
					{skills.map(skill => (
						<SkillsSectionCard key={skill.title} {...skill} />
					))}
				</div>
			</div>
		</section>
	);
};
