import { AbsoluteFill, Img, staticFile, useCurrentFrame, useCurrentScale } from "remotion";
import { config } from "./config";
import { useMemo } from "react";
import { constants } from "./constants";
import { Container, Heading } from "@chakra-ui/react";

export const LandingPageVideo = () => {
    const frame = useCurrentFrame();
    const scale = useCurrentScale();

    const trainTranslateInPx = useMemo(() => {
      const startPosition = 0 - (constants.TRAIN_WIDTH / 2);
      return startPosition + ((frame / config.VIDEO_DURATION_IN_FRAMES) * (config.PLAYER_WIDTH + 2 * constants.TRAIN_WIDTH));
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
            } = constants.BUILDING_CONFIGURATION[index];

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
                filter: `grayscale(0.8)`,
              }}
            />);
          })}
        </AbsoluteFill>
        <AbsoluteFill>
          <Img
              src={staticFile("assets/landing-page-background/subway.png")}
              style={{
                position: 'absolute',
                bottom: `${100}px`,
                left: `-${100}px`,
                transform: `translateX(${trainTranslateInPx}px)`,
                width: `${constants.TRAIN_WIDTH}px`,
                height: `${constants.TRAIN_HEIGHT}px`,
                filter: `grayscale(0.8)`,
              }}
          />
        </AbsoluteFill>
        <AbsoluteFill>
          <Img
                src={staticFile("assets/landing-page-background/bridge.png")}
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  width: `${1920}px`,
                  height: `${120}px`,
                  filter: `grayscale(0.8)`,
                }}
          />
        </AbsoluteFill>
      </AbsoluteFill>);
};