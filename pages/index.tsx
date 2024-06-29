import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Heading } from "@chakra-ui/react";
import { Player } from "@remotion/player";
import { LandingPageVideo } from '../remotion/LandingPageVideo'
import { config } from "../remotion/config";

const LandingPage = () => {
	return (<>
		<Layout>
			<Head>
				<title>{"Bence László - bencelaszlo.hu"}</title>
			</Head>
			<Player
				component={LandingPageVideo}
				durationInFrames={config.VIDEO_DURATION_IN_FRAMES}
				compositionWidth={config.PLAYER_WIDTH}
				compositionHeight={config.PLAYER_HEIGHT}
				style={{
					width: "100%",
					// minWidth: `${config.PLAYER_WIDTH / 3}px`,
					// minHeight: `${config.PLAYER_HEIGHT / 3}px`,
				}}
				fps={config.FPS}
				loop
				autoPlay
			/>
		</Layout>
	</>);
};

export default LandingPage;