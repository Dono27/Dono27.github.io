import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";

const AboutPage = () => {
	return (    <>
		<Layout>
			<Head>
				<title>{"Bence László - bencelaszlo.hu"}</title>
			</Head>
			<Container >
				<div className="bg-slate-950 text-white">
					<h1>Bence László</h1>

				</div>
				<p>bencelaszlo</p>
				<h2>Software Engineer</h2>  
			</Container>
		</Layout>
	</>);
};

export default AboutPage;