import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Home } from "web/pages/home";

import { i18n } from "../../next-i18next.config.js";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale || i18n.defaultLocale, ["home"])),
		},
	};
};

export default Home;
