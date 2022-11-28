import Image from "next/image";
import type { FC } from "react";
import { ProgressBar } from "web/components/progress-bar";

interface SkillsSectionCardProps {
	imageSource: string;
	imageAlt: string;
	title: string;
	progress: number;
	color: string;
}

export const SkillsSectionCard: FC<SkillsSectionCardProps> = ({
	imageSource,
	imageAlt,
	title,
	progress,
	color,
}) => {
	return (
		<div className="border border-white border-opacity-30 px-12 py-7 rounded-md inline-flex items-center justify-center flex-col gap-4 shadow-lg shadow-neutral-600 transition-all hover:-translate-y-1">
			<Image src={imageSource} alt={imageAlt} width="100" height="100" />
			<div className="flex items-center flex-col gap-2">
				<h3>{title}</h3>
				<ProgressBar progress={progress} color={color} />
			</div>
		</div>
	);
};
