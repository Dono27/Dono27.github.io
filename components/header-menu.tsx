/* eslint-disable react/react-in-jsx-scope */
import { Box } from "@chakra-ui/react";
import Container from "./container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";

const HeaderMenu = () => {
	return (
		<Container>
			<Box sx={{
				display: 'flex',
				width: '100%',
				height: '10vh',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '0.625rem',
				border: '1px solid rgba(246, 211, 45, 0.59)',
				background: 'rgba(246, 211, 45, 0.18)',
				backdropFilter: 'blur(13px)',
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
