import Image from "next/image";
import type { FC } from "react";

export const WhoAmISection: FC = () => {
	return (
		<section
			id="who-am-i"
			className="flex items-center justify-between mx-4 mt-10 md:mx-16"
		>
			<div className="flex flex-col gap-4 items-center justify-center max-w-2xl text-center md:items-start md:text-start">
				<h1 className="w-full">Quem sou eu?</h1>
				<p>
					Sou um desenvolvedor full-stack e designer com 3+ anos de experiência
					em várias tecnologias e linguagens de programação, reunindo eficiência
					e qualidade em meus projetos
				</p>
				<a href="#about-me" className="button">
					Saiba mais
				</a>
			</div>
			<div className="hidden md:flex">
				<Image
					src="/programmer.svg"
					alt="Programmer picture"
					width="300"
					height="300"
				/>
			</div>
		</section>
	);
};
