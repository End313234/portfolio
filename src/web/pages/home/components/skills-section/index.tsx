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
		<section id="skills" className="flex items-center justify-center flex-col">
			<div className="flex items-center max-w-screen-2xl flex-col gap-10">
				<h1>Minhas skills</h1>
				<div className="flex w-[70vw] h-64 gap-16 items-center overflow-auto lg:w-[75vw] lg:max-w-screen-md xl:max-w-screen-2xl">
					{skills.map(skill => (
						<SkillsSectionCard key={skill.title} {...skill} />
					))}
				</div>
			</div>
		</section>
	);
};
