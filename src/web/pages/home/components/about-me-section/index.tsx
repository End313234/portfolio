import { useTranslation } from "next-i18next";
import Image from "next/image";
import type { FC } from "react";

export const AboutMeSection: FC = () => {
	const { t } = useTranslation("home");

	return (
		<section
			id="who-am-i"
			className="flex items-center justify-between mx-4 mt-10 md:mx-16"
		>
			<div className="flex flex-col gap-4 items-center justify-center max-w-2xl text-center md:items-start md:text-start">
				<h1 className="w-full">{t("about-me.title")}</h1>
				<p>
					Sou um desenvolvedor full-stack e designer com 3+ anos de experiência
					em várias tecnologias e linguagens de programação, reunindo
					experiência e qualidade em meus projetos
				</p>
				<a href="#projects" className="button">
					Veja meus trabalhos
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
