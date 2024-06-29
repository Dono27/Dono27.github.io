/* eslint-disable react/react-in-jsx-scope */
import { ColorModeScript } from "@chakra-ui/color-mode";
import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "./_app";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body style={{ backgroundColor: "black" }}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
