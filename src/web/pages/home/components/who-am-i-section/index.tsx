import type { FC } from "react";

export const WhoAmISection: FC = () => {
	return (
		<section id="who-am-i" className="flex items-center justify-center">
			<div className="flex items-center justify-between w-screen max-w-screen-2xl gap-10">
				<div className="flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-start">
					<h1 className="w-full">Quem sou eu?</h1>
					<p className="mx-0 max-w-2xl lg:mx-0 lg:max-w-2xl">
						Sou um desenvolvedor full-stack e designer com 3+ anos de
						experiência em várias tecnologias e linguagens de programação,
						reunindo eficiência e qualidade em meus projetos
					</p>
					<a href="#about-me" className="button">
						Saiba mais
					</a>
				</div>
				<div className="hidden lg:flex">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="./programmer.svg"
						alt="Programmer picture"
						className="min-w-[200px] min-h-[200] max-w-[200px]"
					/>
				</div>
			</div>
		</section>
	);
};
