/* eslint-disable react/react-in-jsx-scope */
import { glassStyle } from "../styles/glass";
import Container from "./container";

const Footer = () => {
	return (
		<footer style={{
			height: "10vh",
			display: "flex",
			width: "95%",
			margin: "auto",
			justifyContent: "center",
			alignItems: "center",
			...glassStyle,
		}}>
			<Container>
				<h3>
					Bence László
				</h3>
			</Container>
		</footer>
	);
};

export default Footer;
