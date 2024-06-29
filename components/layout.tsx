/* eslint-disable react/react-in-jsx-scope */
import HeaderMenu from "./header-menu";
import Footer from "./footer";
import Meta from "./meta";
import { Box } from "@chakra-ui/react";

type Props = {
	preview?: boolean
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<Box sx={{
			backgroundColor: "#000",
			color: "#CCC",
		}}>
			<Meta />
			<HeaderMenu />
			<main style={{
				minHeight: "80vh",
			}}>{children}</main>
			<Footer  />
		</Box>
	);
};

export default Layout;
