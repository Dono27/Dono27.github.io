/* eslint-disable react/react-in-jsx-scope */
import Container from "./container";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";

const Alert = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default Alert;
