/* eslint-disable react/react-in-jsx-scope */
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
			<main style={{
				minHeight: "90vh",
			}}>{children}</main>
		</Box>
	);
};

export default Layout;
