/* eslint-disable react/react-in-jsx-scope */
import Container from "./container";

const Footer = () => {
	return (
		<footer style={{
			height: '10vh',
			display: 'flex',
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '0.625rem',
			border: '1px solid rgba(246, 211, 45, 0.59)',
			background: 'rgba(246, 211, 45, 0.18)',
			backdropFilter: 'blur(13px)',
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
