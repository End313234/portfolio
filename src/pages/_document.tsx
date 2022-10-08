import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="pt-br">
			<Head>
				<meta name="title" content="End's Portfolio" />
				<meta
					name="description"
					content="Olá! Sou um designer e desenvolvedor de software pronto para te ajudar em seus projetos."
				/>
				<meta name="theme-color" content="#6FCF97" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://endportfolio.vercel.app/" />
				<meta property="og:title" content="End's Portfolio" />
				<meta
					property="og:description"
					content="Olá! Sou um designer e desenvolvedor de software pronto para te ajudar em seus projetos."
				/>
				<meta property="twitter:url" content="https://metatags.io/" />
				<meta property="twitter:title" content="End's Portfolio" />
				<meta
					property="twitter:description"
					content="Olá! Sou um designer e desenvolvedor de software pronto para te ajudar em seus projetos."
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
