import { AbsoluteFill, Img, staticFile, useCurrentFrame, useCurrentScale } from "remotion";
import { config } from "./config";
import { useMemo } from "react";
import { Container, Heading } from "@chakra-ui/react";

export const LandingPageVideo = () => {
    const frame = useCurrentFrame();
    const scale = useCurrentScale();

    const trainTranslateInPx = useMemo(() => {
      const startPosition = 0 - (config.TRAIN_CONFIGURATION.WIDTH / 2);
      return startPosition + ((frame / config.VIDEO_DURATION_IN_FRAMES) * (config.PLAYER_WIDTH + 2 * config.TRAIN_CONFIGURATION.WIDTH));
    }, [frame]);

    return (
      <AbsoluteFill
      >
        <Container >
          <Heading as='h1' size='4xl' noOfLines={1}>
            Bence László
          </Heading>
          <p>bencelaszlo</p><h2>Software Engineer</h2>
        </Container>
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
          }}
        >
          {Array(10).fill(0).map((_, index) => {
            const {
              assetIndex,
              left,
              bottom,
              zIndex,
              width,
              height,
            } = config.BUILDING_CONFIGURATION[index];

            return (<Img
              key={`building-${index}`}
              src={staticFile(`assets/landing-page-background/building_${assetIndex}.png`)}
              style={{
                position: 'absolute',
                left: `${left}px`,
                bottom: `${bottom}px`,
                zIndex,
                width: `${width}px`,
                height: `${height}px`,
                filter: `grayscale(${config.GRAYSCALE_FILTER})`,
              }}
            />);
          })}
        </AbsoluteFill>
        <AbsoluteFill>
          <Img
              src={staticFile("assets/landing-page-background/subway.png")}
              style={{
                position: 'absolute',
                bottom: `${config.TRAIN_CONFIGURATION.START_POSITION_BOTTOM}px`,
                left: `-${config.TRAIN_CONFIGURATION.START_POSITION_LEFT}px`,
                transform: `translateX(${trainTranslateInPx}px)`,
                width: `${config.TRAIN_CONFIGURATION.WIDTH}px`,
                height: `${config.TRAIN_CONFIGURATION.HEIGHT}px`,
                filter: `grayscale(${config.GRAYSCALE_FILTER})`,
              }}
          />
        </AbsoluteFill>
        <AbsoluteFill>
          <Img
                src={staticFile("assets/landing-page-background/bridge.png")}
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  width: `${config.BRIDGE_CONFIGURATION.WIDTH}px`,
                  height: `${config.BRIDGE_CONFIGURATION.HEIGHT}px`,
                  filter: `grayscale(${config.GRAYSCALE_FILTER})`,
                }}
          />
        </AbsoluteFill>
      </AbsoluteFill>);
};