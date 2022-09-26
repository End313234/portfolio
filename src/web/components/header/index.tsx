import Image from "next/image";
import type { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="flex items-center justify-center gap-4 h-[7rem] shadow-md">
			<Image
				src="/profile-picture.png"
				alt="Profile Picture"
				width="70"
				height="70"
				style={{
					borderRadius: "100%",
				}}
			/>
			<h1>The End</h1>
		</header>
	);
};
