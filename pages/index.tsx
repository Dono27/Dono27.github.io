import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Heading } from "@chakra-ui/react";

const LandingPage = () => {
	return (<>
		<Layout>
			<Head>
				<title>{"Bence László - bencelaszlo.hu"}</title>
			</Head>
			<Container >
				<Heading as='h1' size='4xl' noOfLines={1}>
					Bence László
				</Heading>
				<p>bencelaszlo</p>
				<h2>Software Engineer</h2>
			</Container>
		</Layout>
	</>);
};

export default LandingPage;