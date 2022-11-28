import Image from "next/image";
import type { FC } from "react";

export const AboutMeSection: FC = () => {
	return (
		<section id="about-me" className="flex items-center justify-center">
			<div className="flex items-center justify-between w-screen max-w-screen-2xl flex-col gap-10 lg:flex-row-reverse">
				<div className="border-4 border-green-300 rounded-full flex items-center">
					<Image
						src="/profile-picture.png"
						alt="Discord's profile picture"
						width="200"
						height="200"
						style={{
							borderRadius: "100%",
						}}
					/>
				</div>
				<div className="max-w-2xl text-center flex flex-col gap-5 lg:text-left">
					<h1>Minha jornada</h1>
					<div className="flex flex-col gap-5">
						<p>
							Comecei na área de programação com a linguagem{" "}
							<strong>Python</strong>. Logo em seguida, comecei a estudar{" "}
							<strong>JavaScript</strong> e <strong>TypeScript</strong> e,
							durante esse tempo, tive bastante contato com tecnologias como{" "}
							<strong>NestJS</strong> e <strong>NextJS</strong>. Algum tempo
							depois, passei a focar meus estudos em back-end usando a linguagem
							de programação <strong>Go</strong>, uma linguagem de alto nível
							extremamente rápida.
						</p>
						<p>
							Simultaneamente, evoluí no uso de banco de dados SQL e NoSQL, como{" "}
							<strong>MySQL</strong>, <strong>PostgreSQL</strong>,{" "}
							<strong>MongoDB</strong> e <strong>Firebase</strong>.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
