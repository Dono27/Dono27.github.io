/* eslint-disable react/react-in-jsx-scope */
import { Box } from "@chakra-ui/react";
import Container from "./container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { glassStyle } from "../styles/glass";

const HeaderMenu = () => {
	return (
		<Container>
			<Box sx={{
				display: 'flex',
				width: '95%',
				margin: 'auto',
				height: '10vh',
				justifyContent: 'center',
				alignItems: 'center',
				...glassStyle,
			}}>
				<Breadcrumb fontWeight='medium' fontSize='sm'>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href='/about'>About</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink href='/blog'>Blog</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Box>
		</Container>
	);
};

export default HeaderMenu;
