import type { FC } from "react";

interface ProgressBarProps {
	progress: number;
	color: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress, color }) => {
	return (
		<div className="bg-gray-400 rounded-md h-2 w-20">
			<div
				className="h-2 rounded-md"
				style={{
					backgroundColor: color,
					width: `${progress}%`,
				}}
			></div>
		</div>
	);
};
