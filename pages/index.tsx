import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
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
				style={{ width: "100%" }}
				fps={config.FPS}
				loop
				autoPlay
			/>
		</Layout>
	</>);
};

export default LandingPage;