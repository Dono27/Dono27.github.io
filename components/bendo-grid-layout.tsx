import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { BendoGridItem } from "./bendo-grid.item";
import { config } from "../config";

export const BendoGridLayout = () => {
	return (
		<Grid
			height='100%'
			width='100%'
			templateAreas={`". . . . . . . . ."
                            ". . . . . .  . blog ."
                            ". . . main main main . . ."
                            ". . . main main main . . ."
                            ". about . . . .  . . ."
                            ". . . . . . . . ."
                            ". . . . . . . . ."`}
			gridTemplateRows={"repeat(7, 1fr)"}
			gridTemplateColumns={"repeat(9, 1fr)"}
			gap={5}
		>
			<GridItem area={"left"} />
			<GridItem area={"top"} />
			<GridItem area={"about"}>
				{config.FEATURES.ABOUT && <BendoGridItem label='About' href='/about' as='h2' size='xl' />}
			</GridItem>
			<GridItem area={"main"}>
				<BendoGridItem label='Bence László' href='/' as='h1' size='2xl'>
					<h2>Software Engineer</h2>
					<p>bencelaszlo</p>
				</BendoGridItem>
			</GridItem>
			<GridItem area={"bottom"} />
			<GridItem area={"blog"}>
				{config.FEATURES.BLOG && <BendoGridItem label='Blog' href='/blog' as='h2' size='xl' />}
			</GridItem>
			<GridItem area={"right"} />
		</Grid>
	);
};
